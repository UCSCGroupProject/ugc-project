package com.ugc.staff.Payload.Request.OTP;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@ToString
public class SmsRequest {

    @NotBlank
    private final String phoneNumber;

    @NotBlank
    private final String message;

    public SmsRequest(@JsonProperty("TwilioService") String phoneNumber, @JsonProperty("message") String message) {
        this.phoneNumber = phoneNumber;
        this.message = message;
    }
}
