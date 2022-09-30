package com.ugc.staff.Service;

import com.ugc.staff.Model.ALevel.ALSubject;
import com.ugc.staff.Repository.ALevel.ALSubjectRepository;
import org.springframework.stereotype.Service;

@Service
public class ALSubjectService {


    private final ALSubjectRepository alSubjectRepository;

    public ALSubjectService(ALSubjectRepository alSubjectRepository) {
        this.alSubjectRepository = alSubjectRepository;
    }


    public void initSubjects() {
        alSubjectRepository.save(new ALSubject("Economics"));
        alSubjectRepository.save(new ALSubject("Geography"));
        alSubjectRepository.save(new ALSubject("History"));
        alSubjectRepository.save(new ALSubject("Home Economics"));
        alSubjectRepository.save(new ALSubject("Agricultural Science"));
        alSubjectRepository.save(new ALSubject("Mathematics"));
        alSubjectRepository.save(new ALSubject("Combined Mathematics"));
        alSubjectRepository.save(new ALSubject("Communication & Media Studies"));
        alSubjectRepository.save(new ALSubject("Information & Communication Technology"));
        alSubjectRepository.save(new ALSubject("Accounting"));
        alSubjectRepository.save(new ALSubject("Business Statistics"));
        alSubjectRepository.save(new ALSubject("Political Science"));
        alSubjectRepository.save(new ALSubject("Logic & Scientific Method"));
        alSubjectRepository.save(new ALSubject("Civil Technology"));
        alSubjectRepository.save(new ALSubject("Electrical, Electronic and Information Technology"));
        alSubjectRepository.save(new ALSubject("Agro Technology"));
        alSubjectRepository.save(new ALSubject("Mechanical Technology"));
        alSubjectRepository.save(new ALSubject("Food Technology"));
        alSubjectRepository.save(new ALSubject("Bio-Resource Technology"));
        alSubjectRepository.save(new ALSubject("Buddhism"));
        alSubjectRepository.save(new ALSubject("Hinduism"));
        alSubjectRepository.save(new ALSubject("Christianity"));
        alSubjectRepository.save(new ALSubject("Islam"));
        alSubjectRepository.save(new ALSubject("Buddhist Civilization"));
        alSubjectRepository.save(new ALSubject("Hindu Civilization"));
        alSubjectRepository.save(new ALSubject("Christian Civilization\n"));
        alSubjectRepository.save(new ALSubject("Islamic Civilization"));
        alSubjectRepository.save(new ALSubject("Greek & Roman Civilization"));
        alSubjectRepository.save(new ALSubject("Art"));
        alSubjectRepository.save(new ALSubject("Dancing"));
        alSubjectRepository.save(new ALSubject("Music"));
        alSubjectRepository.save(new ALSubject("Drama & Theatre"));
        alSubjectRepository.save(new ALSubject("Sinhala"));
        alSubjectRepository.save(new ALSubject("Tamil"));
        alSubjectRepository.save(new ALSubject("English"));
        alSubjectRepository.save(new ALSubject("Arabic"));
        alSubjectRepository.save(new ALSubject("Pali"));
        alSubjectRepository.save(new ALSubject("Sanskrit"));
        alSubjectRepository.save(new ALSubject("Chinese"));
        alSubjectRepository.save(new ALSubject("French"));
        alSubjectRepository.save(new ALSubject("German"));
        alSubjectRepository.save(new ALSubject("Hindi"));
        alSubjectRepository.save(new ALSubject("Japanese"));
        alSubjectRepository.save(new ALSubject("Malay"));
        alSubjectRepository.save(new ALSubject("Russian"));
        alSubjectRepository.save(new ALSubject("Business Studies"));
        alSubjectRepository.save(new ALSubject("Chemistry"));
        alSubjectRepository.save(new ALSubject("Physics"));
        alSubjectRepository.save(new ALSubject("Biology"));
        alSubjectRepository.save(new ALSubject("Engineering Technology"));
        alSubjectRepository.save(new ALSubject("Science for Technology"));
        alSubjectRepository.save(new ALSubject("Accountancy"));
        alSubjectRepository.save(new ALSubject("Biosystems Technology"));
        alSubjectRepository.save(new ALSubject("General Information Technology"));
        alSubjectRepository.save(new ALSubject("General English"));
        alSubjectRepository.save(new ALSubject("Common General Test"));
    }
}
