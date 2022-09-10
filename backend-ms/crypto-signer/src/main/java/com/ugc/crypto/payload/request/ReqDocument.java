package com.ugc.crypto.payload.request;

import com.ugc.crypto.model.StudentRecord;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ReqDocument {
    private List<StudentRecord> studentRecords;
    private String creatorName;
    private String creatorAddress;
    private String creatorPublicKey;
    private String creatorPrivateKey;
}
