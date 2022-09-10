package com.ugc.crypto.repository;

import com.ugc.crypto.model.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends MongoRepository<Document, Integer> {
    Document findDocumentsById(Integer documentId);
}
