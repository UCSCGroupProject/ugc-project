package com.ugc.zscore.Services;

import com.ugc.zscore.Model.ZscoreTable;

import java.util.List;

public interface ZScoreTableService {

    public ZscoreTable saveZvalue(ZscoreTable zscoreTable);

    public List<ZscoreTable> fetchZscoreTable();

    public void deleteZvalueById(Long z_id);

    public ZscoreTable updateZvalue(Long z_id, ZscoreTable zscoreTable);
}
