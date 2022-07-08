package com.ugc.blockchain.payload.request;

import lombok.Data;

import java.security.PublicKey;

@Data
public class ReqBlockValidity {
    private Integer blockId;
    private String publicKey;
}
