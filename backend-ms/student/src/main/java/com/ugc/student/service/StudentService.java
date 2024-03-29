package com.ugc.student.service;

import com.ugc.student.model.NICAndExamDetails;
import com.ugc.student.model.Role;
import com.ugc.student.model.Student;
import com.ugc.student.model.StudentDetails;
import com.ugc.student.model.enums.E_Role;
import com.ugc.student.payload.ResType;
import com.ugc.student.payload.request.LoginRequest;
import com.ugc.student.payload.request.PasswordResetRequest;
import com.ugc.student.payload.request.studentRegistration.StudentRegisterRequest;
import com.ugc.student.payload.response.JwtResponse;
import com.ugc.student.payload.response.PayloadResponse;
import com.ugc.student.repository.NICAndExamDetailsRepository;
import com.ugc.student.repository.RoleRepository;
import com.ugc.student.repository.StudentDetailsRepository;
import com.ugc.student.repository.StudentRepository;
import com.ugc.student.security.jwt.JwtUtils;
import com.ugc.student.security.services.UserDetailsImpl;
import org.javatuples.Triplet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StudentService {
    // Repositories
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    NICAndExamDetailsRepository nicAndExamDetailsRepository;
    @Autowired
    StudentDetailsRepository studentDetailsRepository;
    @Autowired
    StudentRepository studentRepository;

    // Utility Services
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    PasswordEncoder encoder;

    public void initRoles() {
        Role studentRole = new Role();
        studentRole.setName(E_Role.ROLE_STUDENT);

        roleRepository.save(studentRole);
    }

    public void initStudents() {
        this.register(new StudentRegisterRequest(

                "199931712165",
                new Date(),
                "sdfsdfsg",
                "DL",
                "dfgdfg",
                new Date(),
                "C:\\fakepath\\AdobePIP.dll",
                "miss",

                "sdfsdf",
                "gdg",
                new Date(),
                "2",
                "1",
                "1",
                "+94775642956",
                "Dhanushka",

                "dhanushka@gmail.com",
                null,
                "TESTING@test123"
                )
        );
    }

    public boolean isStudent(String email) {
        if(studentRepository.existsByEmail(email))
            return true;
        else
            return false;
    }

    // For nic and exam details check validations
    public boolean isNICAlreadyExists(String nic){ return nicAndExamDetailsRepository.existsByNic(nic);}

    public boolean isIndexNoAlreadyExists(String indexNo){return nicAndExamDetailsRepository.existsByIndexNo(indexNo);}

    // For student details validation
    public boolean isPhoneAlreadyExists(String phone){return studentDetailsRepository.existsByPhone(phone);}

    public ResponseEntity<?> login(LoginRequest loginRequest){
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

    public String register(StudentRegisterRequest studentRegisterRequest){
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
        StudentDetails studentDetails = new StudentDetails(
//                savedStudent.getId(),
                studentRegisterRequest.getTitle(),
                studentRegisterRequest.getNameWithInitials(),
                studentRegisterRequest.getFullName(),
                studentRegisterRequest.getDob(),
                studentRegisterRequest.getPob(),
                studentRegisterRequest.getCivilStatus(),
                studentRegisterRequest.getGender(),
                studentRegisterRequest.getPhone(),
                student
        );
        studentDetailsRepository.save(studentDetails);

        // Save nic and exam details
        NICAndExamDetails nicAndExamDetails = new NICAndExamDetails(
                studentRegisterRequest.getNic(),
                studentRegisterRequest.getNicDateOfIssue(),
                studentRegisterRequest.getIndexNo(),
                studentRegisterRequest.getUsedIDType(),
                studentRegisterRequest.getUsedIDNo(),
                studentRegisterRequest.getUsedIDDateOfIssue(),
                studentRegisterRequest.getUsedIDCopy(),
                student
        );
        nicAndExamDetailsRepository.save(nicAndExamDetails);

        return "Registered!";
    }

    @Transactional
    public String passwordReset(PasswordResetRequest passwordResetRequest){
        String encryptedPassword = encoder.encode(passwordResetRequest.getPassword());
        studentRepository.updatePasswordByEmail(passwordResetRequest.getEmail(), encryptedPassword);

        return "Password changed sucessfully using email";
    }

    public ResponseEntity<?> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        if(students.isEmpty()){
            return ResponseEntity.ok(new PayloadResponse(null, "Students not found", ResType.BAD));
        }
        else{
            List<Triplet<String, String, ArrayList<String>>> studentDetails = new ArrayList<>();
            for (Student student: students) {
                ArrayList<String> studentAdditionalDetails = new ArrayList<>();
                studentAdditionalDetails.add(0, "Physical");
                studentAdditionalDetails.add(1, "Colombo");
                studentAdditionalDetails.add(2, "St.Paul's Girls' School");
                Triplet<String, String, ArrayList<String>> newTriplet = new Triplet<>(student.getNicAndExamDetails().getIndexNo(), "1162667", studentAdditionalDetails);
                studentDetails.add(newTriplet);
            }
            return ResponseEntity.ok(new PayloadResponse(studentDetails, "List of Students sent", ResType.OK));
        }

    }
}
