package com.ugc.staff.Controller;

import com.ugc.staff.Model.Enums.E_OfficeDept;
import com.ugc.staff.Payload.Request.SignUpRequest;
import com.ugc.staff.Model.ALPassedStudent;
import com.ugc.staff.Model.ATPassedStudent;
import com.ugc.staff.Model.AppliedStudent;
import com.ugc.staff.Payload.Request.StaffRegistration.LoginDetailsRequest;
import com.ugc.staff.Payload.Request.StaffRegistration.PersonalDetailsRequest;
import com.ugc.staff.Payload.Request.StaffRegistration.RoleDetailsRequest;
import com.ugc.staff.Payload.Request.StaffRegistration.StaffRegisterRequest;
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
    public ResponseEntity<?> register(@Valid @RequestBody StaffRegisterRequest staffRegisterRequest){
        // New user account creation
        staffService.createUser(staffRegisterRequest.getUsername(), staffRegisterRequest.getEmail(),
                passwordEncoder.encode(staffRegisterRequest.getPassword()), staffRegisterRequest.getRole(),
                staffRegisterRequest.getDob(), staffRegisterRequest.getFullName(),
                staffRegisterRequest.getAddress(),staffRegisterRequest.getHomeNumber(), staffRegisterRequest.getPhoneNumber(),
                staffRegisterRequest.getGender(), staffRegisterRequest.getNameWithInitials(),
                staffRegisterRequest.getOfficeDept(), staffRegisterRequest.getTitle());

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }

    @PostMapping(path = "/RoleDetailsFormCheck")
    public ResponseEntity<?> staffRoleFormCheck(@Valid @RequestBody RoleDetailsRequest roleDetailsRequest){
        String strOfficeDept = roleDetailsRequest.getOfficeDept();
        String strRole = roleDetailsRequest.getRole();

       if(!staffService.isOfficeDeptValid(strOfficeDept)){
           return ResponseEntity.ok(new MessageResponse("Office/Department does not exist"));
       }

        if(!staffService.isRoleValid(strRole)){
            return ResponseEntity.ok(new MessageResponse("Role does not exist"));
        }

        return ResponseEntity.ok(new MessageResponse("Section 1 validation passed and saved"));

    }

    @PostMapping(path = "/PersonalDetailsFormCheck")
    public ResponseEntity<?> staffPersonalFormCheck(@Valid @RequestBody PersonalDetailsRequest personalDetailsRequest){
        if(staffService.doesPhoneNumberAlreadyExist(personalDetailsRequest.getPhoneNumber())){
            return ResponseEntity.ok(new MessageResponse("Phone number already exists"));
        }
        if(staffService.doesHomeNumberAlreadyExist(personalDetailsRequest.getHomeNumber())){
            return ResponseEntity.ok(new MessageResponse("Land Line already exists"));
        }
        return ResponseEntity.ok(new MessageResponse("Section 2 validation passed"));
    }

    @PostMapping(path = "/LoginDetailsFormCheck")
    public ResponseEntity<?> staffPersonalFormCheck(@Valid @RequestBody LoginDetailsRequest loginDetailsRequest){
        if(staffService.findByUsername(loginDetailsRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }
        if(staffService.findByEmail(loginDetailsRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already taken"));
        }
        return ResponseEntity.ok(new MessageResponse("Section 3 validation passed"));
    }
}
