package com.ugc.staff.Service;

import com.ugc.staff.Model.*;
import com.ugc.staff.Model.Enums.E_OfficeDept;
import com.ugc.staff.Model.Enums.E_Role;
import com.ugc.staff.Payload.Request.LoginRequest;
import com.ugc.staff.Payload.Request.StaffRegistration.StaffRegisterRequest;
import com.ugc.staff.Payload.Response.JWTResponse;
import com.ugc.staff.Repository.*;
import com.ugc.staff.Security.JWT.JWTUtils;
import com.ugc.staff.Security.Services.UserDetailsImpl;
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
public class StaffService {
    @Autowired
    PasswordEncoder encoder;

    private final AppliedStudentRepository appliedStudentRepository;
    private final ALPassedStudentRepository alPassedStudentRepository;
    private final ATPassedStudentRepository atPassedStudentRepository;
    private final StaffRepository staffRepository;
    private final RoleRepository roleRepository;

    private final AuthenticationManager authenticationManager;

    private final JWTUtils jwtUtils;
    private final OfficeDeptRepository officeDeptRepository;

    private final PersonalDetailsRepository personalDetailsRepository;
    public StaffService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository, ATPassedStudentRepository atPassedStudentRepository, StaffRepository staffRepository, RoleRepository roleRepository, AuthenticationManager authenticationManager, JWTUtils jwtUtils, OfficeDeptRepository officeDeptRepository, PersonalDetailsRepository personalDetailsRepository) {
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
        this.atPassedStudentRepository = atPassedStudentRepository;
        this.staffRepository = staffRepository;
        this.roleRepository = roleRepository;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.officeDeptRepository = officeDeptRepository;
        this.personalDetailsRepository = personalDetailsRepository;
    }

    public void initRoles() {
        Role staffRole0 = new Role();
        staffRole0.setName(E_Role.ROLE_STAFF);

        Role staffRole1 = new Role();
        staffRole1.setName(E_Role.ROLE_Chairman);

        Role staffRole2 = new Role();
        staffRole2.setName(E_Role.ROLE_ViceChairman);

        Role staffRole3 = new Role();
        staffRole3.setName(E_Role.ROLE_Senior_Assistant_Secretary);

        Role staffRole4 = new Role();
        staffRole4.setName(E_Role.ROLE_AssistantSecretary);

        Role staffRole5 = new Role();
        staffRole5.setName(E_Role.ROLE_DeputySecretary);

        Role staffRole6 = new Role();
        staffRole6.setName(E_Role.ROLE_Statistician);

        Role staffRole7 = new Role();
        staffRole7.setName(E_Role.ROLE_AssistantStatistician);

        roleRepository.save(staffRole0);
        roleRepository.save(staffRole1);
        roleRepository.save(staffRole2);
        roleRepository.save(staffRole3);
        roleRepository.save(staffRole4);
        roleRepository.save(staffRole5);
        roleRepository.save(staffRole6);
        roleRepository.save(staffRole7);
    }

    public void initOfficeDept() {
        OfficeDept officeDept0 = new OfficeDept();
        officeDept0.setName(E_OfficeDept.OFFICEDEPT_Default);

        OfficeDept officeDept1 = new OfficeDept();
        officeDept1.setName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Chairman);

        OfficeDept officeDept2 = new OfficeDept();
        officeDept2.setName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Vice_Chairman);

        OfficeDept officeDept3 = new OfficeDept();
        officeDept3.setName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Secretary);

        OfficeDept officeDept4 = new OfficeDept();
        officeDept4.setName(E_OfficeDept.OFFICEDEPT_Personnel_Division);
        OfficeDept officeDept5 = new OfficeDept();

        officeDept5.setName(E_OfficeDept.OFFICEDEPT_University_Admissions_Department);
        OfficeDept officeDept6 = new OfficeDept();

        officeDept6.setName(E_OfficeDept.OFFICEDEPT_Academic_Affairs_Department);
        OfficeDept officeDept7 = new OfficeDept();

        officeDept7.setName(E_OfficeDept.OFFICEDEPT_Management_Information_Systems_Division);

        officeDeptRepository.save(officeDept0);
        officeDeptRepository.save(officeDept1);
        officeDeptRepository.save(officeDept2);
        officeDeptRepository.save(officeDept3);
        officeDeptRepository.save(officeDept4);
        officeDeptRepository.save(officeDept5);
        officeDeptRepository.save(officeDept6);
        officeDeptRepository.save(officeDept7);

    }

    public boolean isStaff(String email) {
        if(staffRepository.existsByEmail(email))
            return true;
        else
            return false;
    }

    public List<AppliedStudent> getAppliedStudents() {
        return appliedStudentRepository.findAll();
    }

    public List<ALPassedStudent> getALPassedStudents() {
        return alPassedStudentRepository.findAll();
    }

    public List<ATPassedStudent> getATPassedStudents() {
        return atPassedStudentRepository.findAll();
    }

    public boolean findByUsername(String username) {
        return staffRepository.existsByUsername(username);
    }

    public boolean findByEmail(String email) {
        return staffRepository.existsByEmail(email);
    }


    public boolean isOfficeDeptValid(String strOfficeDept){
        Optional<OfficeDept> offDept = null;

        switch (strOfficeDept){
            case "default":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Default);
                break;
            case "OC":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Chairman);
                break;
            case "OVC":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Vice_Chairman);
                break;
            case "OS":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Secretary);
                break;
            case "PD":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Personnel_Division);
                break;
            case "UAD":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_University_Admissions_Department);
                break;
            case "AAD":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Academic_Affairs_Department);
                break;
            case "MISD":
                offDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Management_Information_Systems_Division);
                break;
        }

        if (offDept != null)
            return true;
        else
            return false;
    }

    public boolean isRoleValid(String strRole){
        Optional<Role> role = null;

        switch (strRole){
            case "Vice-Chairman":
                role = roleRepository.findByName(E_Role.ROLE_ViceChairman);
                break;
            case "Senior Assistant Secretary":
                role = roleRepository.findByName(E_Role.ROLE_Senior_Assistant_Secretary);
                break;
            case "Assistant Secretary":
                role = roleRepository.findByName(E_Role.ROLE_AssistantSecretary);
                break;
            case "Deputy Secretary":
                role = roleRepository.findByName(E_Role.ROLE_DeputySecretary);
                break;
            case "Statistician":
                role = roleRepository.findByName(E_Role.ROLE_Statistician);
                break;
            case "Assistant Statistician":
                role = roleRepository.findByName(E_Role.ROLE_AssistantStatistician);
                break;
            case "staff":
                role = roleRepository.findByName(E_Role.ROLE_STAFF);
                break;
            case "Chairman":
                role = roleRepository.findByName(E_Role.ROLE_Chairman);
                break;
        }

        if (role != null)
            return true;
        else
            return false;
    }

    public boolean doesPhoneNumberAlreadyExist(String phoneNumber) {
        return personalDetailsRepository.existsByPhoneNumber(phoneNumber);
    }

    public boolean doesHomeNumberAlreadyExist(String phoneNumber) {
        return personalDetailsRepository.existsByHomeNumber(phoneNumber);
    }

//    public void createUser(String username, String email,
//                           String password, String role,
//                           Date dob, String fullName, String address,
//                           String homeNumber, String phoneNumber,
//                           String gender, String nameWithInitials,
//                           String officeDept, String title) {
//
//
//        Set<Role> staffRole = null;
//        //role = roleRepository.findByName(E_Role.ROLE_ViceChairman);
//        if(role == "Vice-Chairman" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_ViceChairman));
//        }
//        else if(role == "Senior Assistant Secretary" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_Senior_Assistant_Secretary));
//        }
//        else if(role == "Assistant Secretary" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_AssistantSecretary));
//        }
//        else if(role == "Deputy Secretary" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_DeputySecretary));
//        }
//        else if(role == "Statistician" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_Statistician));
//        }
//        else if(role == "Assistant Statistician" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_AssistantStatistician));
//        }
//        else if(role == "Chairman" ){
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_Chairman));
//        }
//        else if(role == "Senior Assistant Secretary" ) {
//            staffRole.add(roleRepository.findByName(E_Role.ROLE_Senior_Assistant_Secretary));
//        }
//
//        Set<OfficeDept> staffOfficeDept = null;
//
//        if(officeDept == "OC" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Chairman));
//        }
//        else if(role == "OVC" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Vice_Chairman));
//        }
//        else if(role == "OS" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Office_Of_The_Secretary));
//        }
//        else if(role == "PD" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Personnel_Division));
//        }
//        else if(role == "UAD" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_University_Admissions_Department));
//        }
//        else if(role == "AAD" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Academic_Affairs_Department));
//        }
//        else if(role == "MISD" ){
//            staffOfficeDept.add(officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Management_Information_Systems_Division));
//        }
//
//        // Save staff basic details
//
//        Staff staff = new Staff(username, email, password, staffRole, staffOfficeDept);
//        staffRepository.save(staff);
//
//        // Save staff personal details
//        PersonalDetails personalDetails = new PersonalDetails(
//                title,
//                nameWithInitials,
//                fullName,
//                dob,
//                address,
//                phoneNumber,
//                homeNumber,
//                gender
//        );
//        personalDetailsRepository.save(personalDetails);
//    }

    public String register(StaffRegisterRequest staffRegisterRequest){
        Staff staff = new Staff(
                staffRegisterRequest.getUsername(),
                staffRegisterRequest.getEmail(),
                encoder.encode(staffRegisterRequest.getPassword())
        );

        // User roles
        String strRole = staffRegisterRequest.getRole();
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(strRole == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_STAFF)
                    .orElseThrow(
                            () -> new RuntimeException("Role is not found")
                    );
            roles.add(userRole);
        } else {
            switch (strRole){
                case "staff":
                    System.out.println(strRole);
                    Role staffRole = roleRepository.findByName(E_Role.ROLE_STAFF).orElseThrow(
                            ()-> new RuntimeException("Role is not found")
                    );
                    roles.add(staffRole);
                    break;
            }
        }

        System.out.println(roles);
        staff.setRole(roles);

        // For Office departments
        String strDept = staffRegisterRequest.getOfficeDept();
        Set<OfficeDept> depts = new HashSet<>();

        // Check whether the role is valid or not
        if(strDept == null){
            OfficeDept userDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Default)
                    .orElseThrow(
                            () -> new RuntimeException("Department is not found")
                    );
            depts.add(userDept);
        } else {
            switch (strDept){
                case "default":
                    System.out.println(strDept);
                    OfficeDept staffDept = officeDeptRepository.findByName(E_OfficeDept.OFFICEDEPT_Default).orElseThrow(
                            ()-> new RuntimeException("Department is not found")
                    );
                    depts.add(staffDept);
                    break;
            }
        }

        System.out.println(depts);
        staff.setOfficeDept(depts);

        // Save student login details
        staffRepository.save(staff);

        // Save student details
        PersonalDetails personalDetails = new PersonalDetails(
//                savedStudent.getId(),
                staffRegisterRequest.getTitle(),
                staffRegisterRequest.getNameWithInitials(),
                staffRegisterRequest.getFullName(),
                staffRegisterRequest.getDob(),
                staffRegisterRequest.getAddress(),
                staffRegisterRequest.getPhoneNumber(),
                staffRegisterRequest.getHomeNumber(),
                staffRegisterRequest.getGender(),
                staff
        );
        personalDetailsRepository.save(personalDetails);

        return "Registered!";
    }

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
                new JWTResponse(
                        jwt,
                        userDetails.getId(),
                        userDetails.getUsername(),
                        userDetails.getEmail(),
                        roles
                )
        );
    }
}
