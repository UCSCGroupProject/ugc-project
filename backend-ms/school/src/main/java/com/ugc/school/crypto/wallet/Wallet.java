package com.ugc.school.crypto.wallet;

import com.ugc.school.crypto.signing.ECDSAHelper;
import lombok.Data;

import java.security.KeyPair;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Base64;

@Data
public class Wallet {
    private PrivateKey privateKey;
    private PublicKey publicKey;

    public Wallet(){
        KeyPair keyPair = ECDSAHelper.ellipticCurveCrypto();

        this.privateKey = keyPair.getPrivate();
        this.publicKey = keyPair.getPublic();
    }

    public String getPublicKeyAsString(){
        String pub = Base64.getEncoder().encodeToString(this.publicKey.getEncoded());

        return pub;
    }

    // I added
    public String getPrivateKeyAsString(){
        String pub = Base64.getEncoder().encodeToString(this.privateKey.getEncoded());

        return pub;
    }
}
