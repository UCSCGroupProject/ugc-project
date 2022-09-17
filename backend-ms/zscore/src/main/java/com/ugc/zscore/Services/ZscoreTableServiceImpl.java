package com.ugc.zscore.Services;

import com.ugc.zscore.Model.ZscoreTable;
import com.ugc.zscore.Repository.ZscoreTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ZscoreTableServiceImpl implements ZScoreTableService{

    @Autowired
    private ZscoreTableRepository zscoreTableRepository;

    @Override
    public ZscoreTable saveZvalue(ZscoreTable zscoreTable){
        return zscoreTableRepository.save(zscoreTable);
    }

    @Override
    public List<ZscoreTable> fetchZscoreTable() {
        return zscoreTableRepository.findAll();
    }
}
