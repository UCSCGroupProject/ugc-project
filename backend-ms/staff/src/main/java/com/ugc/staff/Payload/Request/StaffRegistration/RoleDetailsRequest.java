package com.ugc.staff.Payload.Request.StaffRegistration;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class RoleDetailsRequest {
    @NotBlank
    private String office_dept;
    private String role;
}
