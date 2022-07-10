package com.ugc.auth.model;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CreateUserRequestModel {
    @NotNull(message = "First name can not be empty")
    private String firstName;
    @NotNull(message = "Last name can not be empty")
    private String lastName;
    @NotNull(message = "email name can not be empty")
    @Email
    private String email;
    @NotNull(message = "password name can not be empty")
    @Size(min = 8, max = 16, message = "Password must be 8-16 characters long")
    private String password;
}
