package com.ugc.student.service;

import com.ugc.student.model.Role;
import com.ugc.student.model.enums.E_Role;
import com.ugc.student.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    RoleRepository roleRepository;

    public void initRoles() {
        Role studentRole = new Role();
        studentRole.setName(E_Role.ROLE_STUDENT);

        roleRepository.save(studentRole);
    }
}
