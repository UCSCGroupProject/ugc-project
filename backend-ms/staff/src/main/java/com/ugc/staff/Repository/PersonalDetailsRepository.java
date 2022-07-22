package com.ugc.staff.Repository;

import com.ugc.staff.Model.PersonalDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalDetailsRepository extends JpaRepository<PersonalDetails, Long> {
    boolean existsByPhoneNumber(String phone);

    boolean existsByHomeNumber(String phone);
}
