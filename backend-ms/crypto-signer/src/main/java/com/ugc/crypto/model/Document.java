package com.ugc.crypto.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@org.springframework.data.mongodb.core.mapping.Document
@AllArgsConstructor
@NoArgsConstructor
public class Document {
    @Id
    private int id;
    private List<StudentRecord> studentRecords;
    private String creatorName;
    private String creatorAddress;
    private String creatorPublicKey;
    private String creatorSignature;
    private String hash;
    private long timeStamp;
}
