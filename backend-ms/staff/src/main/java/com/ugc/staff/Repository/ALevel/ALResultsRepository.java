package com.ugc.staff.Repository.ALevel;

import com.ugc.staff.Model.ALevel.ALResults;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ALResultsRepository  extends JpaRepository<ALResults, Integer> {
}
