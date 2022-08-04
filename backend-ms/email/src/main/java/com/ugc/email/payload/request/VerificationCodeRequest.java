package com.ugc.email.payload.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VerificationCodeRequest {
    private String email;
    private int enteredCode;
}
