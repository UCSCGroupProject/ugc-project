package com.ugc.crypto.service;

import com.ugc.crypto.model.Document;
import com.ugc.crypto.payload.request.ReqDocument;
import com.ugc.crypto.payload.response.PayloadResponse;
import com.ugc.crypto.payload.response.ResType;
import com.ugc.crypto.repository.DocumentRepository;
import com.ugc.crypto.utils.block.Block;
import com.ugc.crypto.utils.signing.ECDSAHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.PrivateKey;

@Service
public class CryptoSignerService {
    @Autowired
    private DocumentRepository documentRepository;

    public ResponseEntity<?> sign(ReqDocument reqDocument){
        Block block = new Block(
                1,
                reqDocument.getStudentRecords(),
                reqDocument.getCreatorName(),
                reqDocument.getCreatorAddress(),
                reqDocument.getCreatorPublicKey()
        );

        // Convert String to private key
        PrivateKey privateKey = ECDSAHelper.generatePrivateKeyFromString(reqDocument.getCreatorPrivateKey());

        block.generateSignature(privateKey);

        // Save on the public ledger (MongoDB)
        saveDocument(block);

        return ResponseEntity.ok(new PayloadResponse(null, "Document Signed", ResType.OK));
    }

    public void saveDocument(Block block){
        Document document = new Document();

        document.setId(block.getId());
        document.setStudentRecords(block.getStudentRecords());
        document.setCreatorName(block.getCreatorName());
        document.setCreatorAddress(block.getCreatorAddress());
        document.setCreatorPublicKey(block.getCreatorPublicKey());
        document.setCreatorSignature(block.getCreatorSignature());
        document.setHash(block.getHash());
        document.setTimeStamp(block.getTimeStamp());

        documentRepository.save(document);
    }

    public ResponseEntity<?> verify(Integer documentId,String publicKey){
        Document document = documentRepository.findDocumentsById(documentId);

        if(document != null) {
            // Found the block, then verify it

            // Public keys are different
            String publicKeyInDocument = document.getCreatorPublicKey();
            String publicKeyInRequest = publicKey;

            if(!publicKeyInDocument.equals(publicKeyInRequest)) {
                return ResponseEntity.ok(new PayloadResponse(null, "Block creator public key and provided public key is not matching", ResType.BAD));
            }

            // If public keys are matched then check whether the block is verified or not
            boolean isSignatureValid = ECDSAHelper.verifyECDSASignature(
                    document.getCreatorPublicKey(),
                    document.getHash(),
                    document.getCreatorSignature()
            );

            if(isSignatureValid) {
                return ResponseEntity.ok(new PayloadResponse(null, "Block is valid", ResType.OK));
            }
            else{
                return ResponseEntity.ok(new PayloadResponse(null, "Block creator signature is not verified", ResType.BAD));
            }
        } else {
            return ResponseEntity.ok(new PayloadResponse(null, "Document not found", ResType.BAD));
        }
    }
}
