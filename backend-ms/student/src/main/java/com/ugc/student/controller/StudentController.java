package com.ugc.student.controller;

import com.ugc.student.model.Role;
import com.ugc.student.model.Student;
import com.ugc.student.model.enums.E_Role;
import com.ugc.student.payload.request.LoginRequest;
import com.ugc.student.payload.request.studentRegistration.LoginDetailsRequest;
import com.ugc.student.payload.request.studentRegistration.NICAndExamDetailsRequest;
import com.ugc.student.payload.request.SignupRequest;
import com.ugc.student.payload.request.studentRegistration.StudentDetailsRequest;
import com.ugc.student.payload.request.studentRegistration.StudentRegisterRequest;
import com.ugc.student.payload.response.JwtResponse;
import com.ugc.student.payload.response.MessageResponse;
import com.ugc.student.repository.RoleRepository;
import com.ugc.student.repository.StudentRepository;
import com.ugc.student.security.jwt.JwtUtils;
import com.ugc.student.security.services.UserDetailsImpl;
import com.ugc.student.service.StudentService;
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

import javax.validation.Valid;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//@CrossOrigin(origins = "http://localhost:3001", maxAge = 3600)
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    StudentService studentService;


//    @PostConstruct
//    public void initRoles() {
//        studentService.initRoles();
//    }

    @Bean
    CommandLineRunner runner(){
        return  args -> {
            studentService.initRoles();
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
        if(studentRepository.existsByUsername(signupRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }

        if(studentRepository.existsByEmail(signupRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already in use"));
        }

        // New user account creation
        Student student = new Student(
                signupRequest.getUsername(),
                signupRequest.getEmail(),
                encoder.encode(signupRequest.getPassword())
        );

        Set<String> strRoles = signupRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRoles == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_STUDENT)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role){
                    case "student":
                        Role studentRole = roleRepository.findByName(E_Role.ROLE_STUDENT).orElseThrow(
                                ()-> new RuntimeException("Role is not found")
                        );
                        roles.add(studentRole);
                        break;
                }
            });
        }

        student.setRoles(roles);
        studentRepository.save(student);

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }

    @PostMapping("/stuNicAndExamFormCheck")
    public ResponseEntity<?> stuNicAndExamFormCheck(@Valid @RequestBody NICAndExamDetailsRequest nicAndExamDetailsRequest) {
        if (studentService.isNICAlreadyExists(nicAndExamDetailsRequest.getNic())) {
            return ResponseEntity.ok(new MessageResponse("NIC already exists"));
        }
//
        if (studentService.isIndexNoAlreadyExists(nicAndExamDetailsRequest.getIndexNo())) {
            return ResponseEntity.ok(new MessageResponse("Index number already exists"));
        }
//
//        studentService.saveNicAndExamDetails(nicAndExamDetailsRequest);

        return ResponseEntity.ok(new MessageResponse("Section 1 validation passed and saved"));
    }

    @PostMapping("/stuDetailsFormCheck")
    public ResponseEntity<?> stuDetailsFormCheck(@Valid @RequestBody StudentDetailsRequest studentDetailsRequest) {
        if(studentService.isPhoneAlreadyExists(studentDetailsRequest.getPhone())){
            return ResponseEntity.ok(new MessageResponse("Phone number already exists"));
        }

//        studentService.saveStudentDetails(studentDetailsRequest);

        return ResponseEntity.ok(new MessageResponse("Section 2 validation passed"));
    }

    @PostMapping("/loginDetailsFormCheck")
    public ResponseEntity<?> loginDetailsFormCheck(@Valid @RequestBody LoginDetailsRequest loginDetailsRequest) {
        if(studentRepository.existsByUsername(loginDetailsRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("Username is already taken"));
        }

        if(studentRepository.existsByEmail(loginDetailsRequest.getEmail())){
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

    @PostMapping("/studentRegister")
    public ResponseEntity<?> studentRegister(@Valid @RequestBody StudentRegisterRequest studentRegisterRequest) {
        System.out.println(studentRegisterRequest.getUsername());
        Student student = new Student(
                studentRegisterRequest.getUsername(),
                studentRegisterRequest.getEmail(),
                encoder.encode(studentRegisterRequest.getPassword())
        );

        Set<String> strRoles = studentRegisterRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRoles == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_STUDENT)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role){
                    case "student":
                        Role studentRole = roleRepository.findByName(E_Role.ROLE_STUDENT).orElseThrow(
                                ()-> new RuntimeException("Role is not found")
                        );
                        roles.add(studentRole);
                        break;
                }
            });
        }

        System.out.println(roles);
        student.setRoles(roles);

        // Save student login details
        studentRepository.save(student);

        // Save student details
        studentService.saveStudentDetails(
                studentRegisterRequest.getTitle(),
                studentRegisterRequest.getNameWithInitials(),
                studentRegisterRequest.getFullName(),
                studentRegisterRequest.getDob(),
                studentRegisterRequest.getPob(),
                studentRegisterRequest.getCivilStatus(),
                studentRegisterRequest.getGender(),
                studentRegisterRequest.getPhone()
        );

        // Save nic and exam details
        studentService.saveNicAndExamDetails(
                studentRegisterRequest.getNic(),
                studentRegisterRequest.getNicDateOfIssue(),
                studentRegisterRequest.getIndexNo(),
                studentRegisterRequest.getUsedIDType(),
                studentRegisterRequest.getUsedIDNo(),
                studentRegisterRequest.getUsedIDDateOfIssue(),
                studentRegisterRequest.getUsedIDCopy()
        );

        return ResponseEntity.ok(new MessageResponse("Registered!"));
    }
}
