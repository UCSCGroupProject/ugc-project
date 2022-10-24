package com.ugc.crypto.controller;

import com.ugc.crypto.payload.request.document.ReqValidationDocument;
import com.ugc.crypto.service.CryptoPDFService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/crypto/pdf")
public class CryptoPDFController {
    @Autowired
    private CryptoPDFService cryptoPDFService;

    // TODO: Generate PDF
    @GetMapping("")
    public void generate(@RequestParam(name = "username") String username, HttpServletResponse httpServletResponse) throws IOException {
        httpServletResponse.setContentType("application/pdf");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd:hh:mm:ss");
        String currentDateTime = dateFormat.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=pdf_"+currentDateTime+".pdf";
        httpServletResponse.setHeader(headerKey, headerValue);

        if(cryptoPDFService.getDocumentData(username)) {
            cryptoPDFService.generate(httpServletResponse);
        }
    }


    // TODO: Verify PDF
}
