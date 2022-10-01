package com.ugc.staff.Repository.OLevel;

import com.ugc.staff.Model.OLevel.OLResults;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OLResultsRepository extends JpaRepository<OLResults, Integer> {
}
