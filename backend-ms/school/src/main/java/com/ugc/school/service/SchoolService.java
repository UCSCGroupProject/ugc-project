package com.ugc.school.service;

import com.ugc.school.model.Role;
import com.ugc.school.model.School;
import com.ugc.school.model.SchoolDetails;
import com.ugc.school.model.enums.E_Role;
import com.ugc.school.payload.request.LoginRequest;
import com.ugc.school.payload.request.PasswordResetRequest;
import com.ugc.school.payload.request.schoolRegistration.SchoolRegisterRequest;
import com.ugc.school.payload.response.JwtResponse;
import com.ugc.school.repository.RoleRepository;
import com.ugc.school.repository.SchoolDetailsRepository;
import com.ugc.school.repository.SchoolRepository;
import com.ugc.school.security.jwt.JwtUtils;
import com.ugc.school.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SchoolService {
    // Repositories
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    SchoolDetailsRepository schoolDetailsRepository;
    @Autowired
    SchoolRepository schoolRepository;

    // Utility Services
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    PasswordEncoder encoder;

    public void initRoles() {
        Role schoolRole = new Role();
        schoolRole.setName(E_Role.ROLE_SCHOOL);

        roleRepository.save(schoolRole);
    }

    public boolean isSchool(String email) {
        if(schoolRepository.existsByEmail(email))
            return true;
        else
            return false;
    }

    // For school details validation
    public boolean isPhoneAlreadyExists(String phone){return schoolDetailsRepository.existsByPhone(phone);}

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

    public String schoolRegister(SchoolRegisterRequest schoolRegisterRequest){
        School school = new School(
                schoolRegisterRequest.getUsername(),
                schoolRegisterRequest.getEmail(),
                encoder.encode(schoolRegisterRequest.getPassword())
        );

        Set<String> strRoles = schoolRegisterRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRoles == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_SCHOOL)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role){
                    case "school":
                        Role schoolRole = roleRepository.findByName(E_Role.ROLE_SCHOOL).orElseThrow(
                                ()-> new RuntimeException("Role is not found")
                        );
                        roles.add(schoolRole);
                        break;
                }
            });
        }

        System.out.println(roles);
        school.setRoles(roles);

        // Save school login details
        schoolRepository.save(school);

        // Save school details
        SchoolDetails schoolDetails = new SchoolDetails(
                schoolRegisterRequest.getName(),
                schoolRegisterRequest.getAddress(),
                schoolRegisterRequest.getDistrict(),
                schoolRegisterRequest.getPhone(),
                school
        );
        schoolDetailsRepository.save(schoolDetails);

        return "Registered!";
    }

    @Transactional
    public String passwordReset(PasswordResetRequest passwordResetRequest){
        String encryptedPassword = encoder.encode(passwordResetRequest.getPassword());
        schoolRepository.updatePasswordByEmail(passwordResetRequest.getEmail(), encryptedPassword);

        return "Password changed sucessfully using email";
    }
}
