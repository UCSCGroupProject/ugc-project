package com.ugc.blockchain.payload.response;

import com.ugc.blockchain.crypto.blockchain.Block;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResBlockChain {
    private List<Block> blockChain;
}
