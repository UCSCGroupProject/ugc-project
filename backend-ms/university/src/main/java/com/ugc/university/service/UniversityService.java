package com.ugc.university.service;

import com.ugc.university.model.Role;
import com.ugc.university.model.University;
import com.ugc.university.model.UniversityDetails;
import com.ugc.university.model.enums.E_Role;
import com.ugc.university.payload.request.LoginRequest;
import com.ugc.university.payload.request.PasswordResetRequest;
import com.ugc.university.payload.request.universityRegistration.UniversityRegisterRequest;
import com.ugc.university.payload.response.JwtResponse;
import com.ugc.university.repository.RoleRepository;
import com.ugc.university.repository.UniversityDetailsRepository;
import com.ugc.university.repository.UniversityRepository;
import com.ugc.university.security.jwt.JwtUtils;
import com.ugc.university.security.services.UserDetailsImpl;
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
public class UniversityService {
    // Repositories
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UniversityRepository universityRepository;
    @Autowired
    UniversityDetailsRepository universityDetailsRepository;

    // Utility Services
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    PasswordEncoder encoder;

    public void initRoles() {
        Role uniRole0 = new Role();
        uniRole0.setName(E_Role.ROLE_UNI_STAFF);

        Role uniRole1 = new Role();
        uniRole1.setName(E_Role.ROLE_UNI_SECRETARY);

        Role uniRole2 = new Role();
        uniRole2.setName(E_Role.ROLE_UNI_DIRECTOR);

        Role uniRole3 = new Role();
        uniRole3.setName(E_Role.ROLE_UNI_DEPUTY_DIRECTOR);

        roleRepository.save(uniRole0);
        roleRepository.save(uniRole1);
        roleRepository.save(uniRole2);
        roleRepository.save(uniRole3);
    }

    public boolean isUniversity(String email) {
        if(universityRepository.existsByEmail(email))
            return true;
        else
            return false;
    }

    public void initUniversity() {
        this.register(new UniversityRegisterRequest(
                "University of Colombo",
                "College House, 94 Kumaratunga Munidasa Mawatha, Colombo 00700",
                "1",
                "1531",
                "0112 581 835",
                "CMB",
                "cmb@gmail.com",
                "ROLE_UNI_STAFF",
                "CMB@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Peradeniya",
                "Galaha Rd, 20400",
                "3",
                "1974",
                "0812 392 000",
                "PDN",
                "pdn@gmail.com",
                "ROLE_UNI_STAFF",
                "pdn@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Sri Jayewardenepura",
                "Nugegoda",
                "2",
                "1964",
                "0112 801 025",
                "SJP",
                "sjp@gmail.com",
                "ROLE_UNI_STAFF",
                "SJP@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Kelaniya",
                "University of Kelaniya, Administrative Building, Sarasavi Mawatha",
                "6",
                "3010",
                "0112 903 903",
                "KLN",
                "kln@gmail.com",
                "ROLE_UNI_STAFF",
                "KLN@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Moratuwa",
                "Bandaranayake Mawatha, Moratuwa 10400",
                "4",
                "2395",
                "0112 640 051",
                "MRT",
                "mrt@gmail.com",
                "ROLE_UNI_STAFF",
                "MRT@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Jaffna",
                "Sir. Pon, Ramanathan Rd, Jaffna",
                "8",
                "3728",
                "0212 218 101",
                "UJA",
                "uja@gmail.com",
                "ROLE_UNI_STAFF",
                "UJA@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Ruhuna",
                "A2, Matara",
                "5",
                "2465",
                "0412 222 681",
                "RUH",
                "ruh@gmail.com",
                "ROLE_UNI_STAFF",
                "RUH@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Eastern University, Sri Lanka",
                "Trincomalee Hwy, Chenkaladi",
                "10",
                "4737",
                "0652 240 490",
                "EUSL",
                "eusl@gmail.com",
                "ROLE_UNI_STAFF",
                "EUSL@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "South Eastern University of Sri Lanka",
                "7VW2+Q2M, Oluvil",
                "16",
                "7724",
                "0672 255 168",
                "SEUSL",
                "seusl@gmail.com",
                "ROLE_UNI_STAFF",
                "SEUSL@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Rajarata University of Sri Lanka",
                "Mihintale",
                "7",
                "3223",
                "0252 266 643",
                "RUSL",
                "rusl@gmail.com",
                "ROLE_UNI_STAFF",
                "RUSL@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Sabaragamuwa University of Sri Lanka",
                "Sabaragamuwa University of Sri Lanka, Belihuloya 70140",
                "11",
                "4758",
                "0452 280 014",
                "SUSL",
                "susl@gmail.com",
                "ROLE_UNI_STAFF",
                "SUSL@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Wayamba University of Sri Lanka",
                "B308 Negombo-Kurunegala Rd, 60170",
                "9",
                "4349",
                "0372 281 412",
                "WUSL",
                "wusl@gmail.com",
                "ROLE_UNI_STAFF",
                "WUSL@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Uva Wellassa University of Sri Lanka",
                "Badulla",
                "15",
                "7279",
                "0552 226 622",
                "UWU",
                "uwu@gmail.com",
                "ROLE_UNI_STAFF",
                "UWU@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of the Visual & Performing Arts",
                "21 Albert Cres, Colombo 00700",
                "26",
                "15171",
                "0112 033 710",
                "UVPA",
                "uvpa@gmail.com",
                "ROLE_UNI_STAFF",
                "UVPA@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka",
                "Kandy Rd, Yakkala",
                "-1",
                "-1",
                "0332 222 748",
                "GWUIM",
                "gwuim@gmail.com",
                "ROLE_UNI_STAFF",
                "GWUIM@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "The Open University of Sri Lanka",
                "Nawala, Nugegoda 11222",
                "12",
                "5273",
                "0112 881 000",
                "OUSL",
                "ousl@gmail.com",
                "ROLE_UNI_STAFF",
                "OUSL@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Institute of Indigenous Medicine",
                "WV5Q+FHP, Sri Jayawardenepura Kotte",
                "-1",
                "-1",
                "0112 692 385",
                "IIM",
                "iim@gmail.com",
                "ROLE_UNI_STAFF",
                "IIM@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "University of Colombo School of Computing",
                "UCSC Building Complex, 35 Reid Ave, Colombo 00700",
                "-1",
                "-1",
                "0112 581 245",
                "UCSC",
                "ucsc@gmail.com",
                "ROLE_UNI_STAFF",
                "UCSC@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Swami Vipulananda Institute of Aesthetic Studies",
                "Swami Vipulananda Institute of Aesthetic Studies, Batticaloa",
                "-1",
                "-1",
                "0652 222 663",
                "SVIAS",
                "svias@gmail.com",
                "ROLE_UNI_STAFF",
                "SVIAS@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Ramanathan Academy of Fine Arts",
                "P2JG+5HF, B268, Chunnakam",
                "-1",
                "-1",
                "0212 242 413",
                "RAFA",
                "rafa@gmail.com",
                "ROLE_UNI_STAFF",
                "RAFA@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Sripalee Campus",
                "P35C+32W, Horana - Anguruwatota - Mathugama - Aluthgama Road, Horana",
                "-1",
                "-1",
                "0342 265 553",
                "SP",
                "sp@gmail.com",
                "ROLE_UNI_STAFF",
                "SP@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Trincomalee Campus",
                "Trincomalee",
                "-1",
                "-1",
                "0262 222 300",
                "TRINCO",
                "trinco@gmail.com",
                "ROLE_UNI_STAFF",
                "TRINCO@testing123"
        ));

        this.register(new UniversityRegisterRequest(
                "Vavuniya Campus",
                "Vavuniya, Sri Lanka",
                "-1",
                "-1",
                "0242 222 265",
                "VAV",
                "vav@gmail.com",
                "ROLE_UNI_STAFF",
                "VAV@testing123"
        ));
    }

    // For university details validation
    public boolean isPhoneAlreadyExists(String phone){return universityDetailsRepository.existsByPhone(phone);}

    public ResponseEntity<?> login(LoginRequest loginRequest) {
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

    public String register(UniversityRegisterRequest universityRegisterRequest){
        University university = new University(
                universityRegisterRequest.getUsername(),
                universityRegisterRequest.getEmail(),
                encoder.encode(universityRegisterRequest.getPassword())
        );

        String strRole = universityRegisterRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRole == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_UNI_STAFF)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            switch (strRole){
                case "ROLE_UNI_STAFF":
                    Role staffRole = roleRepository.findByName(E_Role.ROLE_UNI_STAFF).orElseThrow(
                            ()-> new RuntimeException("Role is not found")
                    );
                    roles.add(staffRole);
                    break;

                case "ROLE_UNI_SECRETARY":
                    Role secretaryRole = roleRepository.findByName(E_Role.ROLE_UNI_SECRETARY).orElseThrow(
                            ()-> new RuntimeException("Role is not found")
                    );
                    roles.add(secretaryRole);
                    break;

                case "ROLE_UNI_DEPUTY_DIRECTOR":
                    Role deputyDirectorRole = roleRepository.findByName(E_Role.ROLE_UNI_DEPUTY_DIRECTOR).orElseThrow(
                            ()-> new RuntimeException("Role is not found")
                    );
                    roles.add(deputyDirectorRole);
                    break;

                case "ROLE_UNI_DIRECTOR":
                    Role directorRole = roleRepository.findByName(E_Role.ROLE_UNI_DIRECTOR).orElseThrow(
                            ()-> new RuntimeException("Role is not found")
                    );
                    roles.add(directorRole);
                    break;
            }
        }

        university.setRoles(roles);

        // Save university login details
        universityRepository.save(university);

        // Save university details
        UniversityDetails universityDetails = new UniversityDetails(
                universityRegisterRequest.getName(),
                universityRegisterRequest.getAddress(),
                universityRegisterRequest.getIslandRank(),
                universityRegisterRequest.getWorldRank(),
                universityRegisterRequest.getPhone(),
                university
        );

        universityDetailsRepository.save(universityDetails);

        return "Registered successfully !";
    }

    @Transactional
    public String passwordReset(PasswordResetRequest passwordResetRequest){
        String encryptedPassword = encoder.encode(passwordResetRequest.getPassword());
        universityRepository.updatePasswordByEmail(passwordResetRequest.getEmail(), encryptedPassword);

        return "Password changed sucessfully using email";
    }
}
