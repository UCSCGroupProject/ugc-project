package com.ugc.crypto.controller;

import com.ugc.crypto.payload.request.ReqDocument;
import com.ugc.crypto.service.CryptoSignerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/crypto")
public class CryptoSignerController {
    @Autowired
    private CryptoSignerService cryptoSignerService;

    @PostMapping("/sign")
    public ResponseEntity<?> sign(@RequestBody ReqDocument reqDocument){
        return cryptoSignerService.sign(reqDocument);
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verify(@RequestParam(name = "documentId") Integer documentId, @RequestParam(name = "publicKey") String publicKey){
        return cryptoSignerService.verify(documentId, publicKey);
    }
}
