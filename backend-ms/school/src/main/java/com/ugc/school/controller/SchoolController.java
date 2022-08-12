package com.ugc.school.controller;

import com.ugc.school.payload.request.LoginRequest;
import com.ugc.school.payload.request.PasswordResetRequest;
import com.ugc.school.payload.request.schoolRegistration.LoginDetailsRequest;
import com.ugc.school.payload.request.schoolRegistration.SchoolDetailsRequest;
import com.ugc.school.payload.request.schoolRegistration.SchoolRegisterRequest;
import com.ugc.school.payload.response.MessageResponse;
import com.ugc.school.repository.RoleRepository;
import com.ugc.school.repository.SchoolRepository;
import com.ugc.school.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/school")
public class SchoolController {
    @Autowired
    SchoolRepository schoolRepository;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    SchoolService schoolService;


    @GetMapping("/check")
    public String checkStatus() {
        return "Working!";
    }

    @GetMapping("/isSchool")
    public boolean isSchool(@RequestParam String email) {
        return schoolService.isSchool(email);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
        return schoolService.login(loginRequest);
    }

    @PostMapping("/schoolDetailsFormCheck")
    public ResponseEntity<?> schoolDetailsFormCheck(@Valid @RequestBody SchoolDetailsRequest schoolDetailsRequest) {
        if(schoolService.isPhoneAlreadyExists(schoolDetailsRequest.getPhone())){
            return ResponseEntity.ok(new MessageResponse("Phone number already exists"));
        }

        return ResponseEntity.ok(new MessageResponse("Section 2 validation passed"));
    }

    @PostMapping("/loginDetailsFormCheck")
    public ResponseEntity<?> loginDetailsFormCheck(@Valid @RequestBody LoginDetailsRequest loginDetailsRequest) {
        if(schoolRepository.existsByUsername(loginDetailsRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }

        if(schoolRepository.existsByEmail(loginDetailsRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already in use"));
        }

        Set<String> strRoles = loginDetailsRequest.getRole();
        if (strRoles == null){
            return ResponseEntity.ok(new MessageResponse("No role has been defined"));
        } else{
            for (String role: strRoles){
                if(!roleRepository.existsByName(role)){
                    return ResponseEntity.ok(new MessageResponse("Invalid role"));
                }
            }
        }

        return ResponseEntity.ok(new MessageResponse("Section 3 validation passed"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody SchoolRegisterRequest schoolRegisterRequest) {
        String result = schoolService.register(schoolRegisterRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }

    @PostMapping("/passwordReset")
    public ResponseEntity<?> passwordReset(@RequestBody PasswordResetRequest passwordResetRequest) {
        String result = schoolService.passwordReset(passwordResetRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }
}
