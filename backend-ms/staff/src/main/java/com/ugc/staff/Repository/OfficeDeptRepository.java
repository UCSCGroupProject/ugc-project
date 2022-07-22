package com.ugc.staff.Repository;

import com.ugc.staff.Model.OfficeDept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeDeptRepository extends JpaRepository<OfficeDept, Integer> {

    Boolean existsByName(String officeDept);
}
