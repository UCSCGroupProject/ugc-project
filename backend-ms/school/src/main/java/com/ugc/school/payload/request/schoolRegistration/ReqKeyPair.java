package com.ugc.school.payload.request.schoolRegistration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqKeyPair {
    private String privateKey;
    private String publicKey;
}
