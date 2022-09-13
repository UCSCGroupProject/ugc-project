package com.ugc.crypto.service;


import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.ugc.crypto.payload.request.document.ReqStudentRecord;
import com.ugc.crypto.payload.request.document.ReqValidationDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Service
public class CryptoPDFService {
    // TODO: Generate PDF
    public void generate(HttpServletResponse response, ReqValidationDocument reqValidationDocument) throws IOException {
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
        Paragraph schoolName = new Paragraph("School name: " + reqValidationDocument.getSchoolName());
        // School address
        Paragraph schoolAddress = new Paragraph("School address: " + reqValidationDocument.getSchoolAddress());

        // Table
        float colWidth[] = {10, 30, 80, 50, 30, 30};
        Table table = new Table(colWidth);

        table.addCell("No.");
        table.addCell("Index");
        table.addCell("Full name");
        table.addCell("NIC");
        table.addCell("Date of Admission");
        table.addCell("Date of Leave");

        List<ReqStudentRecord> studentRecordList = reqValidationDocument.getStudentRecords();

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


//            Document document = new Document(PageSize.A4);
//            PdfWriter.getInstance(document, response.getOutputStream());
//
//            document.open();
//
//            // Logo
//
//
//            // Title
//            Font fontTitle = FontFactory.getFont(FontFactory.COURIER_BOLD);
//            fontTitle.setSize(15);
//            Paragraph title = new Paragraph("UNIVERSITY GRANT COMMISSION", fontTitle);
//            title.setAlignment(Paragraph.ALIGN_CENTER);
//
//            // Subtitle
//            Font fontSubtitle = FontFactory.getFont(FontFactory.COURIER_BOLD);
//            fontSubtitle.setSize(10);
//            Paragraph subtitle = new Paragraph("Principal's Certificate", fontTitle);
//            subtitle.setAlignment(Paragraph.ALIGN_CENTER);
//
//            // School details
//            Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
//            fontParagraph.setSize(10);
//            // Name of the school
//            Paragraph schoolName = new Paragraph("School name: " + stuDocument.getCreatorName(), fontParagraph);
//            schoolName.setAlignment(Paragraph.ALIGN_LEFT);
//            // School address
//            Paragraph schoolAddress = new Paragraph("School address: " + stuDocument.getCreatorAddress(), fontParagraph);
//            schoolAddress.setAlignment(Paragraph.ALIGN_LEFT);
//
//            // Table
//            float colWidth[] = {10, 30, 80, 50, 30, 30};
//            PdfPTable studentDetailsTable = new PdfPTable(colWidth);
//            studentDetailsTable.setWidthPercentage(100);
//            Font fontTable = FontFactory.getFont(FontFactory.HELVETICA);
//            fontTable.setSize(10);
//
//
//            studentDetailsTable.addCell(new PdfPCell(new Phrase("No.", fontTable)));
//            studentDetailsTable.addCell(new PdfPCell(new Phrase("Index", fontTable)));
//            studentDetailsTable.addCell(new PdfPCell(new Phrase("Full name", fontTable)));
//            studentDetailsTable.addCell(new PdfPCell(new Phrase("NIC", fontTable)));
//            studentDetailsTable.addCell(new PdfPCell(new Phrase("Date of Admission", fontTable)));
//            studentDetailsTable.addCell(new PdfPCell(new Phrase("Date of Leave", fontTable)));
//
//            List<StudentRecord> studentRecordList = stuDocument.getStudentRecords();
//
//            studentRecordList.forEach(item -> {
//                studentDetailsTable.addCell(new PdfPCell(new Phrase(item.getId(), fontTable)));
//                studentDetailsTable.addCell(new PdfPCell(new Phrase(item.getIndex(), fontTable)));
//                studentDetailsTable.addCell(new PdfPCell(new Phrase(item.getFullName(), fontTable)));
//                studentDetailsTable.addCell(new PdfPCell(new Phrase(item.getNic(), fontTable)));
//                studentDetailsTable.addCell(new PdfPCell(new Phrase(item.getDateOfAdmission(), fontTable)));
//                studentDetailsTable.addCell(new PdfPCell(new Phrase(item.getDateOfLeave(), fontTable)));
//            });
//
//            document.add(title);
//            document.add(subtitle);
//            document.add(new Paragraph("\n"));
//            document.add(schoolName);
//            document.add(schoolAddress);
//            document.add(new Paragraph("\n"));
//            document.add(studentDetailsTable);
//
//            document.close();
    }

    // TODO: Verify PDF
}
