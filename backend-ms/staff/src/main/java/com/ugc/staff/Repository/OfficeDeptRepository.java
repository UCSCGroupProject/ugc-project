package com.ugc.staff.Repository;

import com.ugc.staff.Model.Enums.E_OfficeDept;
import com.ugc.staff.Model.OfficeDept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OfficeDeptRepository extends JpaRepository<OfficeDept, Integer> {

    // TODO: OLD CODE - Remove those
//    Boolean existsByName(String officeDept);

    Optional<OfficeDept> findByName(E_OfficeDept name);
}
