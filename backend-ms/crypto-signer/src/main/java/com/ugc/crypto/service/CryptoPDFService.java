package com.ugc.crypto.service;

import com.itextpdf.io.font.FontConstants;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.xobject.PdfImageXObject;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.ugc.crypto.payload.request.document.ReqStudentRecord;
import com.ugc.crypto.payload.request.document.ReqValidationDocument;
import com.ugc.crypto.payload.response.PayloadResponse;
import com.ugc.crypto.payload.response.document.ResStudentRecord;
import com.ugc.crypto.payload.response.document.ResValidationDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import javax.swing.text.StyleConstants;
import java.io.IOException;
import java.util.List;

@Service
public class CryptoPDFService {
    @Autowired
    RestTemplate restTemplate;

    ResValidationDocument resValidationDocument = new ResValidationDocument();

    public Boolean getDocumentData(String username) {
        try {
            // Cant recieve complex objects
            ResValidationDocument resValidationDocumentTemp = restTemplate.getForObject("http://localhost:8084/api/school/support/document?username="+username, ResValidationDocument.class);

            if(resValidationDocumentTemp != null) {
                resValidationDocument = resValidationDocumentTemp;
            }

            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());

            return false;
        }
    }

    // TODO: Generate PDF
    public void generate(HttpServletResponse response) throws IOException {
        PdfWriter writer = new PdfWriter(response.getOutputStream());
        PdfDocument pdfDocument = new PdfDocument(writer);
        Document document = new Document(pdfDocument, PageSize.A4);

        // Logo
        ImageData data = ImageDataFactory.create("crypto-signer\\src\\main\\java\\com\\ugc\\crypto\\service\\UgcLogoL.jpg");
        Image logo = new Image(data);

        // Title
        Paragraph title = new Paragraph("UNIVERSITY GRANT COMMISSION");

        // Subtitle
        Paragraph subtitle = new Paragraph("Principal's Certificate");

        // School details
        // Name of the school
        Paragraph schoolName = new Paragraph("School name: " + resValidationDocument.getSchoolName());
        // School address
        Paragraph schoolAddress = new Paragraph("School address: " + resValidationDocument.getSchoolAddress());

        PdfFont tableFont = PdfFontFactory.createFont(FontConstants.HELVETICA);

        // Table
        float colWidth[] = {10, 30, 80, 50, 30, 30, 20};
        Table table = new Table(colWidth);

        table.addCell("No.");
        table.addCell("Index");
        table.addCell("Full name");
        table.addCell("NIC");
        table.addCell("Date of Admission");
        table.addCell("Date of Leave");
        table.addCell("Validity");

        List<ResStudentRecord> studentRecordList = resValidationDocument.getStudentRecords();

        studentRecordList.forEach(item -> {
            table.addCell(item.getId().toString());
            table.addCell(item.getStuIndex());
            table.addCell(item.getFullName());
            table.addCell(item.getNic());
            table.addCell(item.getAdmissionDate());
            table.addCell(item.getLeaveDate());
            table.addCell(item.getValidity()? "Valid" : "Invalid");
        });

        document.add(logo);
        document.add(title);
        document.add(subtitle);
        document.add(new Paragraph("\n"));
        document.add(schoolName);
        document.add(schoolAddress);
        document.add(new Paragraph("\n"));
        document.add(table);

        document.close();
    }

    // TODO: Verify PDF
}
