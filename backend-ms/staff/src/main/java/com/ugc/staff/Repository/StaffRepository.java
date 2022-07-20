package com.ugc.staff.Repository;

import com.ugc.staff.Model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {

    Optional<Staff> findByEmail(String email);

    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
