package com.ugc.university.controller;

import com.ugc.university.model.Role;
import com.ugc.university.model.University;
import com.ugc.university.model.enums.E_Role;
import com.ugc.university.payload.request.LoginRequest;
import com.ugc.university.payload.request.SignupRequest;
import com.ugc.university.payload.request.email.CodeRequest;
import com.ugc.university.payload.request.email.EmailRequest;
import com.ugc.university.payload.request.otp.OTPRequest;
import com.ugc.university.payload.request.otp.SmsRequest;
import com.ugc.university.payload.request.universityRegistration.LoginDetailsRequest;
import com.ugc.university.payload.request.universityRegistration.UniversityDetailsRequest;
import com.ugc.university.payload.request.universityRegistration.UniversityRegisterRequest;
import com.ugc.university.payload.response.JwtResponse;
import com.ugc.university.payload.response.MessageResponse;
import com.ugc.university.repository.RoleRepository;
import com.ugc.university.repository.UniversityRepository;
import com.ugc.university.security.jwt.JwtUtils;
import com.ugc.university.security.services.UserDetailsImpl;
import com.ugc.university.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/university")
public class UniversityController {
    @Autowired
    RestTemplate restTemplate;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UniversityRepository universityRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UniversityService universityService;

    @Bean
    CommandLineRunner runner(){
        return  args -> {
            universityService.initRoles();
        };
    }

    @GetMapping("/check")
    public String checkStatus() {
        return "Working!";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(role -> role.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(
                new JwtResponse(
                        jwt,
                        userDetails.getId(),
                        userDetails.getUsername(),
                        userDetails.getEmail(),
                        roles
                )
        );
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody SignupRequest signupRequest){
        if(universityRepository.existsByUsername(signupRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }

        if(universityRepository.existsByEmail(signupRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already in use"));
        }

        // New user account creation
        University university = new University(
                signupRequest.getUsername(),
                signupRequest.getEmail(),
                encoder.encode(signupRequest.getPassword())
        );

        Set<String> strRoles = signupRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRoles == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_UNIVERSITY)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role){
                    case "student":
                        Role studentRole = roleRepository.findByName(E_Role.ROLE_UNIVERSITY).orElseThrow(
                                ()-> new RuntimeException("Role is not found")
                        );
                        roles.add(studentRole);
                        break;
                }
            });
        }

        university.setRoles(roles);
        universityRepository.save(university);

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
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
    public ResponseEntity<?> studentRegister(@Valid @RequestBody UniversityRegisterRequest universityRegisterRequest) {
        System.out.println(universityRegisterRequest.getUsername());
        University university = new University(
                universityRegisterRequest.getUsername(),
                universityRegisterRequest.getEmail(),
                encoder.encode(universityRegisterRequest.getPassword())
        );

        Set<String> strRoles = universityRegisterRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRoles == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_UNIVERSITY)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role){
                    case "student":
                        Role studentRole = roleRepository.findByName(E_Role.ROLE_UNIVERSITY).orElseThrow(
                                ()-> new RuntimeException("Role is not found")
                        );
                        roles.add(studentRole);
                        break;
                }
            });
        }

        System.out.println(roles);
        university.setRoles(roles);

        // Save student login details
        universityRepository.save(university);

        // Save student details
        universityService.saveUniversityDetails(
                universityRegisterRequest.getName(),
                universityRegisterRequest.getAddress(),
                universityRegisterRequest.getIslandRank(),
                universityRegisterRequest.getWorldRank(),
                universityRegisterRequest.getPhone()
        );

        // Save nic and exam details
//        studentService.saveNicAndExamDetails(
//                studentRegisterRequest.getNic(),
//                studentRegisterRequest.getNicDateOfIssue(),
//                studentRegisterRequest.getIndexNo(),
//                studentRegisterRequest.getUsedIDType(),
//                studentRegisterRequest.getUsedIDNo(),
//                studentRegisterRequest.getUsedIDDateOfIssue(),
//                studentRegisterRequest.getUsedIDCopy()
//        );

        return ResponseEntity.ok(new MessageResponse("Registered!"));
    }


    // OTP Validation and Generation for phone number
    // TODO: Need to be write protected. Otherwise race conditions may occur.
    int otp = 0;

    @PostMapping("/generateOTP")
    public void generateOTP(@Valid @RequestBody SmsRequest smsRequest){
        otp = universityService.generateOTP();

        // Even sms request sent a message in built, here i am using message redefinition on server side
        SmsRequest otpSms = new SmsRequest(
                smsRequest.getPhoneNumber(),
                "Your OTP is " + otp
        );

        restTemplate.postForObject(
                "http://localhost:2/api/notification/sms",
                otpSms,
                smsRequest.getClass()
        );

        System.out.println("Generated and sent to " + smsRequest.getPhoneNumber());
    }

    @PostMapping("/validateOTP")
    public boolean validateOTP(@RequestBody OTPRequest otpRequest){
        if(otp != 0){
            if(otp == otpRequest.getEnteredOtp()){
                System.out.println("OTP valid");
                return true;
            }
            else {
                System.out.println("OTP invalid");
                return false;
            }
        } else {
            System.out.println("No OTP has been generated");
            return false;
        }
    }

    // Code validation adn generation for Email
    // TODO: Need to be write protected. Otherwise race conditions may occur.
    int code = 0;

    @PostMapping("/generateCode")
    public void generateCode(@Valid @RequestBody EmailRequest emailRequest){
        code = universityService.generateCode();
        String strCode = String.valueOf(code);

        // Even sms request sent a message in built, here i am using message redefinition on server side
        EmailRequest email = new EmailRequest(
                emailRequest.getRecipient(),
                strCode,
                "",
                ""
        );

        restTemplate.postForObject(
                "http://localhost:3/api/email/sendVerifyAccountEmail",
                email,
                emailRequest.getClass()
        );

        System.out.println("Generated and sent to " + emailRequest.getRecipient());
    }

    @PostMapping("/validateCode")
    public boolean validateCode(@RequestBody CodeRequest codeRequest){
        if(code != 0){
            if(code == codeRequest.getEnteredCode()){
                System.out.println("Code valid");
                return true;
            }
            else {
                System.out.println("Code invalid");
                return false;
            }
        } else {
            System.out.println("No Code has been generated");
            return false;
        }
    }
}
