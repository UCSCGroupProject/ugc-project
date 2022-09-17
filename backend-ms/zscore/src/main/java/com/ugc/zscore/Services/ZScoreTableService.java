package com.ugc.zscore.Services;

import com.ugc.zscore.Model.ZscoreTable;

import java.util.List;

public interface ZScoreTableService {
    static String updateZvalue(Long z_id, ZscoreTable zscoreTable) {
    }


//    static void deleteZvalueById(Long z_id);

    public ZscoreTable saveZvalue(ZscoreTable zscoreTable);

    public List<ZscoreTable> fetchZscoreTable();
}
