package com.ugc.university.service;

import com.ugc.university.model.Role;
import com.ugc.university.model.University;
import com.ugc.university.model.UniversityDetails;
import com.ugc.university.model.enums.E_Role;
import com.ugc.university.payload.request.LoginRequest;
import com.ugc.university.payload.request.universityRegistration.UniversityRegisterRequest;
import com.ugc.university.payload.response.JwtResponse;
import com.ugc.university.payload.response.MessageResponse;
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
        Role studentRole = new Role();
        studentRole.setName(E_Role.ROLE_UNIVERSITY);

        roleRepository.save(studentRole);
    }

    public boolean isUniversity(String email) {
        if(universityRepository.existsByEmail(email))
            return true;
        else
            return false;
    }

    public void initUniversity() {
        this.universityRegister(new UniversityRegisterRequest(
                "University of Colombo",
                "College House, 94 Kumaratunga Munidasa Mawatha, Colombo 00700",
                "1",
                "1531",
                "0112 581 835",
                "CMB",
                "cmb@gmail.com",
                "CMB@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Peradeniya",
                "Galaha Rd, 20400",
                "3",
                "1974",
                "0812 392 000",
                "PDN",
                "pdn@gmail.com",
                "pdn@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Sri Jayewardenepura",
                "Nugegoda",
                "2",
                "1964",
                "0112 801 025",
                "SJP",
                "sjp@gmail.com",
                "SJP@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Kelaniya",
                "University of Kelaniya, Administrative Building, Sarasavi Mawatha",
                "6",
                "3010",
                "0112 903 903",
                "KLN",
                "kln@gmail.com",
                "KLN@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Moratuwa",
                "Bandaranayake Mawatha, Moratuwa 10400",
                "4",
                "2395",
                "0112 640 051",
                "MRT",
                "mrt@gmail.com",
                "MRT@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Jaffna",
                "Sir. Pon, Ramanathan Rd, Jaffna",
                "8",
                "3728",
                "0212 218 101",
                "UJA",
                "uja@gmail.com",
                "UJA@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Ruhuna",
                "A2, Matara",
                "5",
                "2465",
                "0412 222 681",
                "RUH",
                "ruh@gmail.com",
                "RUH@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Eastern University, Sri Lanka",
                "Trincomalee Hwy, Chenkaladi",
                "10",
                "4737",
                "0652 240 490",
                "EUSL",
                "eusl@gmail.com",
                "EUSL@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                " South Eastern University of Sri Lanka",
                "7VW2+Q2M, Oluvil",
                "16",
                "7724",
                "0672 255 168",
                "SEUSL",
                "seusl@gmail.com",
                "SEUSL@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Rajarata University of Sri Lanka",
                "Mihintale",
                "7",
                "3223",
                "0252 266 643",
                "RUSL",
                "rusl@gmail.com",
                "RUSL@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Sabaragamuwa University of Sri Lanka",
                "Sabaragamuwa University of Sri Lanka, Belihuloya 70140",
                "11",
                "4758",
                "0452 280 014",
                "SUSL",
                "susl@gmail.com",
                "SUSL@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Wayamba University of Sri Lanka",
                "B308 Negombo-Kurunegala Rd, 60170",
                "9",
                "4349",
                "0372 281 412",
                "WUSL",
                "wusl@gmail.com",
                "WUSL@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Uva Wellassa University of Sri Lanka",
                "Badulla",
                "15",
                "7279",
                "0552 226 622",
                "UWU",
                "uwu@gmail.com",
                "UWU@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of the Visual & Performing Arts",
                "21 Albert Cres, Colombo 00700",
                "26",
                "15171",
                "0112 033 710",
                "UVPA",
                "uvpa@gmail.com",
                "UVPA@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka",
                "Kandy Rd, Yakkala",
                "-1",
                "-1",
                "0332 222 748",
                "GWUIM",
                "gwuim@gmail.com",
                "GWUIM@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "The Open University of Sri Lanka",
                "Nawala, Nugegoda 11222",
                "12",
                "5273",
                "0112 881 000",
                "OUSL",
                "ousl@gmail.com",
                "OUSL@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Institute of Indigenous Medicine",
                "WV5Q+FHP, Sri Jayawardenepura Kotte",
                "-1",
                "-1",
                "0112 692 385",
                "IIM",
                "iim@gmail.com",
                "IIM@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "University of Colombo School of Computing",
                "UCSC Building Complex, 35 Reid Ave, Colombo 00700",
                "-1",
                "-1",
                "0112 581 245",
                "UCSC",
                "ucsc@gmail.com",
                "UCSC@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Swami Vipulananda Institute of Aesthetic Studies",
                "Swami Vipulananda Institute of Aesthetic Studies, Batticaloa",
                "-1",
                "-1",
                "0652 222 663",
                "SVIAS",
                "svias@gmail.com",
                "SVIAS@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Ramanathan Academy of Fine Arts",
                "P2JG+5HF, B268, Chunnakam",
                "-1",
                "-1",
                "0212 242 413",
                "RAFA",
                "rafa@gmail.com",
                "RAFA@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Sripalee Campus",
                "P35C+32W, Horana - Anguruwatota - Mathugama - Aluthgama Road, Horana",
                "-1",
                "-1",
                "0342 265 553",
                "SP",
                "sp@gmail.com",
                "SP@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                " Trincomalee Campus",
                "Trincomalee",
                "-1",
                "-1",
                "0262 222 300",
                "TRINCO",
                "trinco@gmail.com",
                "TRINCO@testing123"
        ));

        this.universityRegister(new UniversityRegisterRequest(
                "Vavuniya Campus",
                "Vavuniya, Sri Lanka",
                "-1",
                "-1",
                "0242 222 265",
                "VAV",
                "vav@gmail.com",
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

    public String universityRegister(UniversityRegisterRequest universityRegisterRequest){
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
        UniversityDetails universityDetails = new UniversityDetails(
                universityRegisterRequest.getName(),
                universityRegisterRequest.getAddress(),
                universityRegisterRequest.getIslandRank(),
                universityRegisterRequest.getWorldRank(),
                universityRegisterRequest.getPhone()
        );

        universityDetailsRepository.save(universityDetails);

        return "Registered successfully !";
    }
}
