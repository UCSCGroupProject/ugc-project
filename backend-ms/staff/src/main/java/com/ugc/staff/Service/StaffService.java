package com.ugc.staff.Service;

import com.ugc.staff.Model.*;
import com.ugc.staff.Model.Enums.E_OfficeDept;
import com.ugc.staff.Model.Enums.E_Role;
import com.ugc.staff.Repository.*;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class StaffService {
    private final AppliedStudentRepository appliedStudentRepository;
    private final ALPassedStudentRepository alPassedStudentRepository;
    private final ATPassedStudentRepository atPassedStudentRepository;
    private final StaffRepository staffRepository;
    private final RoleRepository roleRepository;

    private final OfficeDeptRepository officeDeptRepository;

    public StaffService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository, ATPassedStudentRepository atPassedStudentRepository, StaffRepository staffRepository, RoleRepository roleRepository, OfficeDeptRepository officeDeptRepository) {
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
        this.atPassedStudentRepository = atPassedStudentRepository;
        this.staffRepository = staffRepository;
        this.roleRepository = roleRepository;
        this.officeDeptRepository = officeDeptRepository;
    }

    public void initRoles() {
        Role staffRole1 = new Role();
        staffRole1.setName(E_Role.ROLE_Chairman);

        Role staffRole2 = new Role();
        staffRole2.setName(E_Role.ROLE_ViceChairman);

        Role staffRole3 = new Role();
        staffRole3.setName(E_Role.Senior_Assistant_Secretary);

        Role staffRole4 = new Role();
        staffRole4.setName(E_Role.ROLE_AssistantSecretary);

        Role staffRole5 = new Role();
        staffRole5.setName(E_Role.ROLE_DeputySecretary);

        Role staffRole6 = new Role();
        staffRole6.setName(E_Role.ROLE_Statistician);

        Role staffRole7 = new Role();
        staffRole7.setName(E_Role.ROLE_AssistantStatistician);

        roleRepository.save(staffRole1);
        roleRepository.save(staffRole2);
        roleRepository.save(staffRole3);
        roleRepository.save(staffRole4);
        roleRepository.save(staffRole5);
        roleRepository.save(staffRole6);
        roleRepository.save(staffRole7);

    }

    public void initOfficeDept() {
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

        officeDeptRepository.save(officeDept1);
        officeDeptRepository.save(officeDept2);
        officeDeptRepository.save(officeDept3);
        officeDeptRepository.save(officeDept4);
        officeDeptRepository.save(officeDept5);
        officeDeptRepository.save(officeDept6);
        officeDeptRepository.save(officeDept7);

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

    public void createUser(String username, String email, String password, Set<String> role) {
        Staff staff = new Staff(
                username, email, password
        );
        Set<String> staffRole = role;
        Set<Role> roles = new HashSet<>();

        // Check whether the role is valid or not
        if(staffRole == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_STAFF)
                    .orElseThrow(() -> new RuntimeException("Role is not found"));
            roles.add(userRole);
        }
        else{
            staffRole.forEach(sRole -> {
                switch (sRole){
                    case "staff":
                        Role userRole = roleRepository.findByName(E_Role.ROLE_STAFF).orElseThrow(
                                ()-> new RuntimeException("Role is not found")
                        );
                        roles.add(userRole);
                        break;
                }
            });
        }

        staff.setRoles(roles);
        staffRepository.save(staff);
    }

    public boolean findRole(String role) {
        return roleRepository.existsByName(role);
    }

    public boolean findOffice_Dept(String office_dept) {
        return officeDeptRepository.existsByName(office_dept);
    }
}
