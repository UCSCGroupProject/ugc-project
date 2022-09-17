package com.ugc.zscore.Services;

import com.ugc.zscore.Model.ZscoreTable;

import java.util.List;

public interface ZScoreTableService {
    public ZscoreTable saveZvalue(ZscoreTable zscoreTable);

    public List<ZscoreTable> fetchZscoreTable();
}
