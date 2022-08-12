package com.ugc.staff.Repository;

import com.ugc.staff.Model.Enums.E_OfficeDept;
import com.ugc.staff.Model.OfficeDept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OfficeDeptRepository extends JpaRepository<OfficeDept, Integer> {
//    OfficeDept findByName(E_OfficeDept name);
    Optional<OfficeDept> findByName(E_OfficeDept name);
}
