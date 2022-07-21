package com.ugc.student.payload.request.otp;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@ToString
public class SmsRequest {
    @NotBlank
    private final String phoneNumber;
    @NotBlank
    private final String message;

    public SmsRequest(String phoneNumber, String message) {
        this.phoneNumber = phoneNumber;
        this.message = message;
    }
}
