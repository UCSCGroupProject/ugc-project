package com.ugc.student.controller;

import com.ugc.student.payload.request.LoginRequest;
import com.ugc.student.payload.request.PasswordResetRequest;
import com.ugc.student.payload.request.studentRegistration.LoginDetailsRequest;
import com.ugc.student.payload.request.studentRegistration.NICAndExamDetailsRequest;
import com.ugc.student.payload.request.studentRegistration.StudentDetailsRequest;
import com.ugc.student.payload.request.studentRegistration.StudentRegisterRequest;
import com.ugc.student.payload.response.MessageResponse;
import com.ugc.student.repository.RoleRepository;
import com.ugc.student.repository.StudentRepository;
import com.ugc.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    StudentService studentService;

    @GetMapping("/check")
    public String checkStatus() {
        return "Working!";
    }

    @GetMapping("/isStudent")
    public boolean isStudent(@RequestParam String email) {
        return studentService.isStudent(email);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
        return studentService.login(loginRequest);
    }

    @PostMapping("/stuNicAndExamFormCheck")
    public ResponseEntity<?> stuNicAndExamFormCheck(@Valid @RequestBody NICAndExamDetailsRequest nicAndExamDetailsRequest) {
        if (studentService.isNICAlreadyExists(nicAndExamDetailsRequest.getNic())) {
            return ResponseEntity.ok(new MessageResponse("NIC already exists"));
        }

        if (studentService.isIndexNoAlreadyExists(nicAndExamDetailsRequest.getIndexNo())) {
            return ResponseEntity.ok(new MessageResponse("Index number already exists"));
        }

        return ResponseEntity.ok(new MessageResponse("Section 1 validation passed and saved"));
    }

    @PostMapping("/stuDetailsFormCheck")
    public ResponseEntity<?> stuDetailsFormCheck(@Valid @RequestBody StudentDetailsRequest studentDetailsRequest) {
        if(studentService.isPhoneAlreadyExists(studentDetailsRequest.getPhone())){
            return ResponseEntity.ok(new MessageResponse("Phone number already exists"));
        }

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

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody StudentRegisterRequest studentRegisterRequest) {
        String result = studentService.register(studentRegisterRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }

    @PostMapping("/passwordReset")
    public ResponseEntity<?> passwordReset(@RequestBody PasswordResetRequest passwordResetRequest) {
        String result = studentService.passwordReset(passwordResetRequest);

        return ResponseEntity.ok(new MessageResponse(result));
    }

    @GetMapping("/getStudents")
    public ResponseEntity<?> getAllStudents() {
        return studentService.getAllStudents();
    }
}
