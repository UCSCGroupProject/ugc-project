package com.ugc.university.service.alsubject;

import com.ugc.university.model.alsubject.Alsubject;
import com.ugc.university.repository.alsubject.ALSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ALSubjectService {
    @Autowired
    private ALSubjectRepository alSubjectRepository;

    public void initALSubjects() {
        alSubjectRepository.save(new Alsubject("Arabic"));
        alSubjectRepository.save(new Alsubject("Art"));
        alSubjectRepository.save(new Alsubject("Bharatha Natayam"));
        alSubjectRepository.save(new Alsubject("Buddhism"));
        alSubjectRepository.save(new Alsubject("Buddhist Civilization"));
        alSubjectRepository.save(new Alsubject("Chinese"));
        alSubjectRepository.save(new Alsubject("Christian Civilization"));
        alSubjectRepository.save(new Alsubject("Christianity"));
        alSubjectRepository.save(new Alsubject("Communication and Media Studies"));
        alSubjectRepository.save(new Alsubject("Dance"));
        alSubjectRepository.save(new Alsubject("Economics"));
        alSubjectRepository.save(new Alsubject("English"));
        alSubjectRepository.save(new Alsubject("French"));
        alSubjectRepository.save(new Alsubject("Geography"));
        alSubjectRepository.save(new Alsubject("German"));
        alSubjectRepository.save(new Alsubject("Greek and Roman Civilization"));
        alSubjectRepository.save(new Alsubject("Hindi Language"));
        alSubjectRepository.save(new Alsubject("Hindu Civilization"));
        alSubjectRepository.save(new Alsubject("Hinduism"));
        alSubjectRepository.save(new Alsubject("History"));
        alSubjectRepository.save(new Alsubject("Home Economics"));
        alSubjectRepository.save(new Alsubject("Islam"));
        alSubjectRepository.save(new Alsubject("Islamic Civilization"));
        alSubjectRepository.save(new Alsubject("Japan Language"));
        alSubjectRepository.save(new Alsubject("Logic and Scientific Method"));
        alSubjectRepository.save(new Alsubject("Oriental Music"));
        alSubjectRepository.save(new Alsubject("Pali Language"));
        alSubjectRepository.save(new Alsubject("Political Science"));
        alSubjectRepository.save(new Alsubject("Russian"));
        alSubjectRepository.save(new Alsubject("Sanskrit"));
        alSubjectRepository.save(new Alsubject("Sinhala"));
        alSubjectRepository.save(new Alsubject("Tamil"));
        alSubjectRepository.save(new Alsubject("Western Music"));

        alSubjectRepository.save(new Alsubject("Accounting"));
        alSubjectRepository.save(new Alsubject("Business"));
        alSubjectRepository.save(new Alsubject("Statistics Business"));
        alSubjectRepository.save(new Alsubject("Studies Economics"));

        alSubjectRepository.save(new Alsubject("Agricultural Science"));
        alSubjectRepository.save(new Alsubject("Bio System Technology"));
        alSubjectRepository.save(new Alsubject("Biology"));
        alSubjectRepository.save(new Alsubject("Chemistry"));
        alSubjectRepository.save(new Alsubject("Physics"));
        alSubjectRepository.save(new Alsubject("Science for Technology"));

        alSubjectRepository.save(new Alsubject("Mathematics"));
        alSubjectRepository.save(new Alsubject("Combined Mathematics"));
        alSubjectRepository.save(new Alsubject("Higher Mathematics"));

        alSubjectRepository.save(new Alsubject("Food Technology"));
        alSubjectRepository.save(new Alsubject("Bio-Resource Technology"));
        alSubjectRepository.save(new Alsubject("Agro Technology"));
        alSubjectRepository.save(new Alsubject("Engineering Technology"));
        alSubjectRepository.save(new Alsubject("General Information Technology"));
        alSubjectRepository.save(new Alsubject("Information & Communication Technology"));
    }
}
