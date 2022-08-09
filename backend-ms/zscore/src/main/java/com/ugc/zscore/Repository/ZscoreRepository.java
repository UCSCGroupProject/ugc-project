package com.ugc.zscore.Repository;

import com.ugc.zscore.Model.Zscore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZscoreRepository extends JpaRepository<Zscore, Long> {
}
