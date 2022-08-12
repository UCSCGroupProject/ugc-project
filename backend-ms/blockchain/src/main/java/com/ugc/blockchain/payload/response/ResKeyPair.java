package com.ugc.blockchain.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.PrivateKey;
import java.security.PublicKey;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResKeyPair {
    private String privateKey;
    private String publicKey;
}
