package com.ugc.staff.Repository;

import com.ugc.staff.Model.Enums.E_Role;
import com.ugc.staff.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Role findByName(E_Role roleStaff);
}
