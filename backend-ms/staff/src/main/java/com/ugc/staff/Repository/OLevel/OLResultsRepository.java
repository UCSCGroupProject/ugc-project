package com.ugc.staff.Repository.OLevel;

import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.OLevel.OLResults;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OLResultsRepository extends JpaRepository<OLResults, Integer> {
    @Query("SELECT t FROM OLResults t WHERE t.indexNumber=?1")
    OLResults getIndex(String index);
}
