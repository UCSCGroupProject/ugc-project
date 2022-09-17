package com.ugc.zscore.Repository;

import com.ugc.zscore.Model.Zscore;
import com.ugc.zscore.Model.ZscoreTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZscoreTableRepository extends JpaRepository<ZscoreTable, Long>{

}
