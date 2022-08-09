package com.ugc.university.controller;

import com.ugc.university.payload.request.LoginRequest;
import com.ugc.university.payload.request.PasswordResetRequest;
import com.ugc.university.payload.request.universityRegistration.LoginDetailsRequest;
import com.ugc.university.payload.request.universityRegistration.UniversityDetailsRequest;
import com.ugc.university.payload.request.universityRegistration.UniversityRegisterRequest;
import com.ugc.university.payload.response.MessageResponse;
import com.ugc.university.repository.RoleRepository;
import com.ugc.university.repository.UniversityRepository;
import com.ugc.university.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Set;

//@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university")
public class UniversityController {
    @Autowired
    UniversityRepository universityRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UniversityService universityService;

    @GetMapping("/check")
    public String checkStatus() {
        return "Working!";
    }

    @GetMapping("/isUniversity")
    public boolean isUniversity(@RequestParam String email) {
        return universityService.isUniversity(email);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
        return universityService.login(loginRequest);
    }

    @PostMapping("/uniDetailsFormCheck")
    public ResponseEntity<?> uniDetailsFormCheck(@Valid @RequestBody UniversityDetailsRequest universityDetailsRequest) {
        if(universityService.isPhoneAlreadyExists(universityDetailsRequest.getPhone())){
            return ResponseEntity.ok(new MessageResponse("Phone number already exists"));
        }

        return ResponseEntity.ok(new MessageResponse("Section 2 validation passed"));
    }

    @PostMapping("/loginDetailsFormCheck")
    public ResponseEntity<?> loginDetailsFormCheck(@Valid @RequestBody LoginDetailsRequest loginDetailsRequest) {
        if(universityRepository.existsByUsername(loginDetailsRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }

        if(universityRepository.existsByEmail(loginDetailsRequest.getEmail())){
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

    @PostMapping("/universityRegister")
    public ResponseEntity<?> universityRegister(@Valid @RequestBody UniversityRegisterRequest universityRegisterRequest) {
        String result = universityService.universityRegister(universityRegisterRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }

    @PostMapping("/passwordReset")
    public ResponseEntity<?> passwordReset(@RequestBody PasswordResetRequest passwordResetRequest) {
        String result = universityService.passwordReset(passwordResetRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }
}
