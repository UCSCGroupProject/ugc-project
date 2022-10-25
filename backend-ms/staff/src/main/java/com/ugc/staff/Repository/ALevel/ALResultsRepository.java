package com.ugc.staff.Repository.ALevel;

import com.ugc.staff.Model.ALevel.ALResults;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ALResultsRepository  extends JpaRepository<ALResults, Integer> {
    @Query("SELECT t.indexNumber FROM ALResults t WHERE t.passOrFail=?1")
    List<String> findByPassOrFail(String isPass);

    @Query("SELECT t FROM ALResults t WHERE t.indexNumber=?1")
    ALResults getIndex(String index);
}
