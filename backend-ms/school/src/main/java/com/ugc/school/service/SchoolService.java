package com.ugc.school.service;

import com.ugc.school.crypto.wallet.Wallet;
import com.ugc.school.model.Keypair;
import com.ugc.school.model.Role;
import com.ugc.school.model.School;
import com.ugc.school.model.SchoolDetails;
import com.ugc.school.model.enums.E_Role;
import com.ugc.school.payload.request.LoginRequest;
import com.ugc.school.payload.request.PasswordResetRequest;
import com.ugc.school.payload.request.schoolRegistration.ReqKeyPair;
import com.ugc.school.payload.request.schoolRegistration.SchoolRegisterRequest;
import com.ugc.school.payload.response.JwtResponse;
import com.ugc.school.payload.response.PayloadResponse;
import com.ugc.school.payload.response.ResType;
import com.ugc.school.payload.response.objects.ResKeypair;
import com.ugc.school.repository.KeypairRepository;
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
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
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
    @Autowired
    KeypairRepository keypairRepository;

    // Utility Services
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    PasswordEncoder encoder;

    public void initRoles() {
        Role schoolRole0 = new Role();
        schoolRole0.setName(E_Role.ROLE_SCHOOL_STAFF);

        Role schoolRole1 = new Role();
        schoolRole1.setName(E_Role.ROLE_SCHOOL_SECRETARY);

        Role schoolRole2 = new Role();
        schoolRole2.setName(E_Role.ROLE_SCHOOL_VICE_PRINCIPLE);

        Role schoolRole3 = new Role();
        schoolRole3.setName(E_Role.ROLE_SCHOOL_PRINCIPLE);

        roleRepository.save(schoolRole0);
        roleRepository.save(schoolRole1);
        roleRepository.save(schoolRole2);
        roleRepository.save(schoolRole3);
    }

    public boolean isSchool(String email) {
        if(schoolRepository.existsByEmail(email))
            return true;
        else
            return false;
    }

    public void initSchools() {
        this.register(new SchoolRegisterRequest(
                "Royale College",
                "Royale College, Colombo 7",
                "Colombo",
                "0362254890",
                "RC",
                "royalcollege@gmail.com",
                "ROLE_SCHOOL_STAFF",
                "TESTING@123"
        ));
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

    public ResponseEntity<?> register(SchoolRegisterRequest schoolRegisterRequest){
        School school = new School(
                schoolRegisterRequest.getUsername(),
                schoolRegisterRequest.getEmail(),
                encoder.encode(schoolRegisterRequest.getPassword())
        );

        String strRole = schoolRegisterRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRole == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_SCHOOL_STAFF)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            switch (strRole){
                case "ROLE_SCHOOL_STAFF":
                    Role staffRole = roleRepository.findByName(E_Role.ROLE_SCHOOL_STAFF).orElseThrow(
                            ()-> new RuntimeException("Role is not found")
                    );
                    roles.add(staffRole);
                    break;

            case "ROLE_SCHOOL_SECRETARY":
                Role secretaryRole = roleRepository.findByName(E_Role.ROLE_SCHOOL_SECRETARY).orElseThrow(
                        ()-> new RuntimeException("Role is not found")
                );
                roles.add(secretaryRole);
                break;

            case "ROLE_SCHOOL_VICE_PRINCIPLE":
                Role vicePrincipleRole = roleRepository.findByName(E_Role.ROLE_SCHOOL_VICE_PRINCIPLE).orElseThrow(
                        ()-> new RuntimeException("Role is not found")
                );
                roles.add(vicePrincipleRole);
                break;

            case "ROLE_SCHOOL_PRINCIPLE":
                Role principleRole = roleRepository.findByName(E_Role.ROLE_SCHOOL_PRINCIPLE).orElseThrow(
                        ()-> new RuntimeException("Role is not found")
                );
                roles.add(principleRole);
                break;
            }
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

//        // For digital signing
//        Wallet wallet = new Wallet();
//
//        // Save key pair
//        Keypair keypair = new Keypair(
//                wallet.getPrivateKeyAsString(),
//                wallet.getPublicKeyAsString(),
//                school
//        );

//        keypairRepository.save(keypair);

        return ResponseEntity.ok(new PayloadResponse(null, "School registered successfully", ResType.OK));
    }

    @Transactional
    public String passwordReset(PasswordResetRequest passwordResetRequest){
        String encryptedPassword = encoder.encode(passwordResetRequest.getPassword());
        schoolRepository.updatePasswordByEmail(passwordResetRequest.getEmail(), encryptedPassword);

        return "Password changed sucessfully using email";
    }

    public ResponseEntity<?> getKeyPair(String username) {
        School school = schoolRepository.findByUsername(username);

        if(school != null){
            // If exists
            Keypair keypair = keypairRepository.getKeypairBySchool(school);

            ResKeypair resKeypair = new ResKeypair(
                    keypair.getPrivateKey(),
                    keypair.getPublicKey()
            );

            return ResponseEntity.ok(new PayloadResponse(resKeypair, "Keypair found", ResType.OK));
        } else {
            return ResponseEntity.ok(new PayloadResponse(null, "User not found", ResType.BAD));
        }
    }

    public ResponseEntity<?> getAllSchools() {
        List<School> schools = schoolRepository.findAll();
        if(schools.isEmpty()){
            return ResponseEntity.ok(new PayloadResponse(null, "Schools not found", ResType.BAD));
        }
        else{

            return ResponseEntity.ok(new PayloadResponse(schools.size(), "Size of schools sent", ResType.OK));
        }
    }
}
