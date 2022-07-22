package com.ugc.staff.Payload.Request.StaffRegistration;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.Set;

@Getter
@Setter
public class RoleDetailsRequest {
    private String office_dept;
    private String role;
}
