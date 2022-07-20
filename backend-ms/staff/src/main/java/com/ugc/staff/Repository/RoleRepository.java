package com.ugc.staff.Repository;

import com.ugc.staff.Model.Enums.E_Role;
import com.ugc.staff.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(E_Role name);
}
