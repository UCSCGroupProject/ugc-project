package com.ugc.zscore.Repository;

import com.ugc.zscore.Model.ZTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZTableRepository extends JpaRepository<ZTable, Integer>{

}
