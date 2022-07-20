package com.ugc.staff.Payload.Request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
public class SignUpRequest {
    @NotBlank
    @Size(max = 100)
    private String username;

    @NotBlank
    @Size(max = 100)
    private String email;

    private Set<String> role;

    @NotBlank
    @Size(max = 120)
    private String password;
}
