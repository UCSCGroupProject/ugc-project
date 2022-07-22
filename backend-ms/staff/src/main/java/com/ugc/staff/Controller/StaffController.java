package com.ugc.staff.Controller;

import com.ugc.staff.Payload.Request.SignUpRequest;
import com.ugc.staff.Model.ALPassedStudent;
import com.ugc.staff.Model.ATPassedStudent;
import com.ugc.staff.Model.AppliedStudent;
import com.ugc.staff.Payload.Request.StaffRegistration.RoleDetailsRequest;
import com.ugc.staff.Payload.Response.MessageResponse;
import com.ugc.staff.Service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin("*")
public class StaffController {
    private final StaffService staffService;

    private PasswordEncoder passwordEncoder;

    @Autowired
    public StaffController(StaffService staffService, PasswordEncoder passwordEncoder) {
        this.staffService = staffService;
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    CommandLineRunner runner(){
        return  args -> {
            staffService.initRoles();
            staffService.initOfficeDept();
        };
    }

    @GetMapping(path = "appliedStudents")
    public List<AppliedStudent> getAppliedStudents(){
        return staffService.getAppliedStudents();
    }

    @GetMapping(path = "ALPassedStudents")
    public List<ALPassedStudent> getALPassedStudents(){
        return staffService.getALPassedStudents();
    }

    @GetMapping(path = "ATPassedStudents")
    public List<ATPassedStudent> getATPassedStudents(){
        return staffService.getATPassedStudents();
    }

    @PostMapping(path = "/register")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpRequest signUpRequest){
        if(staffService.findByUsername(signUpRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }

        if(staffService.findByEmail(signUpRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already taken"));
        }

        // New user account creation
        staffService.createUser(signUpRequest.getUsername(),
                signUpRequest.getEmail(), passwordEncoder.encode(signUpRequest.getPassword()), signUpRequest.getRole());

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }

    @PostMapping(path = "/RoleDetailsFormCheck")
    public ResponseEntity<?> staffRoleFormCheck(@Valid @RequestBody RoleDetailsRequest roleDetailsRequest){

        String strRoles = roleDetailsRequest.getRole();
        String strOfficeDept = roleDetailsRequest.getOffice_dept();

        //for(String role: strRoles) {
            if (!staffService.findRole(strRoles)) {
                return ResponseEntity.ok(new MessageResponse("Role does not exist"));
            }
       // }
        //for(String officeDept: strOfficeDept){
            if(!staffService.findOffice_Dept(strOfficeDept)){
                return ResponseEntity.ok(new MessageResponse("Office/Department does not exist"));
            }
       // }
        return ResponseEntity.ok(new MessageResponse("Section 1 validation passed and saved"));

    }
}
