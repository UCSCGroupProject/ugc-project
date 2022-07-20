package com.ugc.staff.Service;

import com.ugc.staff.Model.*;
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

    public StaffService(AppliedStudentRepository appliedStudentRepository, ALPassedStudentRepository alPassedStudentRepository, ATPassedStudentRepository atPassedStudentRepository, StaffRepository staffRepository, RoleRepository roleRepository) {
        this.appliedStudentRepository = appliedStudentRepository;
        this.alPassedStudentRepository = alPassedStudentRepository;
        this.atPassedStudentRepository = atPassedStudentRepository;
        this.staffRepository = staffRepository;
        this.roleRepository = roleRepository;
    }

    public void initRoles() {
        Role staffRole = new Role();
        staffRole.setName(E_Role.ROLE_STAFF);

        roleRepository.save(staffRole);
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
}
