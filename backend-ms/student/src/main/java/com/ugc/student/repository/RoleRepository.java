package com.ugc.student.repository;

import com.ugc.student.model.Role;
import com.ugc.student.model.enums.E_Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(E_Role name);
}
