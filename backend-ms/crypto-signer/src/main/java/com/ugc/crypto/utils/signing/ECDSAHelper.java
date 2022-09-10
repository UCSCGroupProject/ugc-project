package com.ugc.crypto.utils.signing;

import org.bouncycastle.jce.provider.BouncyCastleProvider;

import java.security.*;
import java.security.spec.ECGenParameterSpec;
import java.security.spec.EncodedKeySpec;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class ECDSAHelper {
    public static KeyPair ellipticCurveCrypto(){
        try {
            Security.addProvider(new BouncyCastleProvider());

            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("ECDSA", "BC");
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            ECGenParameterSpec ecSpec = new ECGenParameterSpec("secp192k1");
            keyPairGenerator.initialize(ecSpec, secureRandom);
            KeyPair keyPair = keyPairGenerator.generateKeyPair();

            return keyPair;
        } catch (NoSuchAlgorithmException | InvalidAlgorithmParameterException | NoSuchProviderException e) {
            e.printStackTrace();
        }

        return null;
    }

    // Use ECDSA signature and returns the result
    public static String applyECDSASignature(PrivateKey privateKey, String input) {
        String sign;

        try {
            Signature ecdsaSign = Signature.getInstance("ECDSA", "BC");
            ecdsaSign.initSign(privateKey);
            ecdsaSign.update(input.getBytes("UTF-8"));
            byte[] signature = ecdsaSign.sign();
            sign = Base64.getEncoder().encodeToString(signature);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return sign;
    }

    // Check the data is signed by the actual user based on the signature
    public static  boolean verifyECDSASignature(String publicKey, String data, String signature) {
        try{
            Signature ecdsaVerify = Signature.getInstance("ECDSA", "BC");
            KeyFactory keyFactory = KeyFactory.getInstance("ECDSA", "BC");

            EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(Base64.getDecoder().decode(publicKey));

            PublicKey pubKey = keyFactory.generatePublic(publicKeySpec);

            ecdsaVerify.initVerify(pubKey);
            ecdsaVerify.update(data.getBytes("UTF-8"));

            return ecdsaVerify.verify(Base64.getDecoder().decode(signature));
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    // I Added
    // IDEA (Source:- https://stackoverflow.com/questions/27682618/1convert-the-ecdsa-private-public-key-2verification-by-ecdsa)
    // IF String Private key THEN use PKCS --> To generate original Elliptic curve Private key
    // IF String Public key THEN use X.509 --> To generate original Elliptic curve Public key
    // KeyFactor is used for Retrieve those original keys.
    public static PrivateKey generatePrivateKeyFromString(String stringPrivateKey){
        try {
            KeyFactory keyFactory = KeyFactory.getInstance("ECDSA", "BC");

            PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(Base64.getDecoder().decode(stringPrivateKey));

            PrivateKey priKey = keyFactory.generatePrivate(privateKeySpec);

            return priKey;
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
