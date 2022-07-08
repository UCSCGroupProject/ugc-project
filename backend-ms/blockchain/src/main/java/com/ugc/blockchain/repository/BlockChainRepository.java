package com.ugc.blockchain.repository;

import com.ugc.blockchain.model.Block;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlockChainRepository extends MongoRepository<Block, Integer> {
}
