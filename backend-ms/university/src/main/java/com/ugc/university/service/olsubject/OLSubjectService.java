package com.ugc.university.service.olsubject;

import com.ugc.university.model.olsubject.Olsubject;
import com.ugc.university.repository.olsubject.OLSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OLSubjectService {
    @Autowired
    private OLSubjectRepository olSubjectRepository;

    public void initOLSubjects() {
        olSubjectRepository.save(new Olsubject("English"));
        olSubjectRepository.save(new Olsubject("Mathematics"));
        olSubjectRepository.save(new Olsubject("Science"));
    }
}
