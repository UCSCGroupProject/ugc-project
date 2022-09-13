package com.ugc.school.payload.response.objects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResKeypair {
    private String privateKey;
    private String publicKey;
}
