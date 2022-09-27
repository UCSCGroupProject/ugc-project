package com.ugc.zscore.Services;

import com.ugc.zscore.Model.ZscoreTable;
import com.ugc.zscore.Repository.ZscoreTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

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

    @Override
    public void deleteZvalueById(Long z_id){
        zscoreTableRepository.deleteById(z_id);
    }

    @Override
    public ZscoreTable updateZvalue(Long z_id, ZscoreTable zscoreTable) {
        ZscoreTable zstDB = zscoreTableRepository.findById(z_id).get();

        if(Objects.nonNull(zscoreTable.getDistrict()) &&
        !"".equalsIgnoreCase(zscoreTable.getDistrict())){
            zstDB.setDistrict(zscoreTable.getDistrict());
        }

        return zscoreTableRepository.save(zstDB);
    }

}
