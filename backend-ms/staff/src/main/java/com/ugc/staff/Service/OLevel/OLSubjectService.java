package com.ugc.staff.Service.OLevel;

import com.ugc.staff.Model.ALevel.ALSubject;
import com.ugc.staff.Model.OLevel.OLSubject;
import com.ugc.staff.Repository.OLevel.OLSubjectRepository;
import org.springframework.stereotype.Service;

@Service
public class OLSubjectService {


    private final OLSubjectRepository olSubjectRepository;

    public OLSubjectService(OLSubjectRepository olSubjectRepository) {
        this.olSubjectRepository = olSubjectRepository;
    }


    public void initSubjects() {
        olSubjectRepository.save(new OLSubject("Buddhism"));
        olSubjectRepository.save(new OLSubject("Hinduism"));
        olSubjectRepository.save(new OLSubject("Catholicism"));
        olSubjectRepository.save(new OLSubject("Christianity"));
        olSubjectRepository.save(new OLSubject("Islam"));
        olSubjectRepository.save(new OLSubject("Sinhala Language and Literature"));
        olSubjectRepository.save(new OLSubject("Tamil Language and Literature"));
        olSubjectRepository.save(new OLSubject("English"));
        olSubjectRepository.save(new OLSubject("History"));
        olSubjectRepository.save(new OLSubject("Science"));
        olSubjectRepository.save(new OLSubject("Mathematics"));
        olSubjectRepository.save(new OLSubject("Business & Accounting Studies"));
        olSubjectRepository.save(new OLSubject("Geography"));
        olSubjectRepository.save(new OLSubject("Civic Education"));
        olSubjectRepository.save(new OLSubject("Entrepreneurship Studies"));
        olSubjectRepository.save(new OLSubject("Second Language (Sinhala)"));
        olSubjectRepository.save(new OLSubject("Second Language (Tamil)"));
        olSubjectRepository.save(new OLSubject("Pali"));
        olSubjectRepository.save(new OLSubject("Sanskrit"));
        olSubjectRepository.save(new OLSubject("French"));
        olSubjectRepository.save(new OLSubject("German"));
        olSubjectRepository.save(new OLSubject("Hindi"));
        olSubjectRepository.save(new OLSubject("Japanese"));
        olSubjectRepository.save(new OLSubject("Arabic"));
        olSubjectRepository.save(new OLSubject("Korean"));
        olSubjectRepository.save(new OLSubject("Chinese"));
        olSubjectRepository.save(new OLSubject("Russian"));
        olSubjectRepository.save(new OLSubject("Oriental Music"));
        olSubjectRepository.save(new OLSubject("Western Music"));
        olSubjectRepository.save(new OLSubject("Carnatic Music"));
        olSubjectRepository.save(new OLSubject("Oriental Dancing"));
        olSubjectRepository.save(new OLSubject("Bharatha Dancing"));
        olSubjectRepository.save(new OLSubject("Art"));
        olSubjectRepository.save(new OLSubject("Appreciation of English Literary Texts"));
        olSubjectRepository.save(new OLSubject("Appreciation of Sinhala Literary Texts"));
        olSubjectRepository.save(new OLSubject("Appreciation of Tamil Literary Texts"));
        olSubjectRepository.save(new OLSubject("Appreciation of Arabic Literary Texts"));
        olSubjectRepository.save(new OLSubject("Drama and Theatre"));
        olSubjectRepository.save(new OLSubject("Information & Communication Technology"));
        olSubjectRepository.save(new OLSubject("Agriculture & Food Technology"));
        olSubjectRepository.save(new OLSubject("Aquatic Bio-resources Technology"));
        olSubjectRepository.save(new OLSubject("Arts & Crafts"));
        olSubjectRepository.save(new OLSubject("Home Economics"));
        olSubjectRepository.save(new OLSubject("Health & Physical Education"));
        olSubjectRepository.save(new OLSubject("Communication & Media Studies"));
        olSubjectRepository.save(new OLSubject("Design & Construction Technology"));
        olSubjectRepository.save(new OLSubject("Design & Mechanical Technology"));
        olSubjectRepository.save(new OLSubject("Design, Electrical & Electronic Technology"));
        olSubjectRepository.save(new OLSubject("Electronic Writing & Shorthand"));
    }
}
