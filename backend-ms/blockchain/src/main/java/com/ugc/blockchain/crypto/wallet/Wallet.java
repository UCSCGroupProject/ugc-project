package com.ugc.blockchain.crypto.wallet;

import com.ugc.blockchain.crypto.signing.ECDSAHelper;
import com.ugc.blockchain.payload.response.ResKeyPair;
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

    // I added later to send School service
    public ResKeyPair getKeypairAsString() {
        ResKeyPair resKeyPair = new ResKeyPair();
        resKeyPair.setPrivateKey(Base64.getEncoder().encodeToString(this.privateKey.getEncoded()));
        resKeyPair.setPublicKey(Base64.getEncoder().encodeToString(this.publicKey.getEncoded()));

        return resKeyPair;
    }
}
