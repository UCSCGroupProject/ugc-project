package com.ugc.staff.Service;

import com.ugc.staff.Model.Course;
import com.ugc.staff.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public void initCourses() {
        courseRepository.save(new Course("Medicine"));
        courseRepository.save(new Course("Dental Surgery"));
        courseRepository.save(new Course("Veterinary Science"));
        courseRepository.save(new Course("Agriculture"));
        courseRepository.save(new Course("Food science & Nutrition"));
        courseRepository.save(new Course("Biological Science"));
        courseRepository.save(new Course("Applied Sciences (Biological Science)"));
        courseRepository.save(new Course("Engineering"));
        courseRepository.save(new Course("Engineering (EM)"));
        courseRepository.save(new Course("Engineering (TM)"));
        courseRepository.save(new Course("Quantity Surveying"));
        courseRepository.save(new Course("Computer Science"));
        courseRepository.save(new Course("Physical Science"));
        courseRepository.save(new Course("Surveying Science"));
        courseRepository.save(new Course("Applied Sciences (Physical Sciences)"));
        courseRepository.save(new Course("Management"));
        courseRepository.save(new Course("Estate Management & Valuation"));
        courseRepository.save(new Course("Commerce"));
        courseRepository.save(new Course("Arts"));
        courseRepository.save(new Course("Arts (SP) - Mass Media"));
        courseRepository.save(new Course("Arts (SP) - Performing Arts"));
        courseRepository.save(new Course("Arts (SAB)"));
        courseRepository.save(new Course("Management Studies (TV)"));
        courseRepository.save(new Course("Architecture"));
        courseRepository.save(new Course("Design"));
        courseRepository.save(new Course("Law"));
        courseRepository.save(new Course("Information Technology (IT)"));
        courseRepository.save(new Course("Management & Information Technology (MIT)"));
        courseRepository.save(new Course("Management (Public) Honours"));
        courseRepository.save(new Course("Communication Studies"));
        courseRepository.save(new Course("Town & Country Planning"));
        courseRepository.save(new Course("Peace and Conflict Resolution"));
        courseRepository.save(new Course("Ayurvedic Medicine and Surgery"));
        courseRepository.save(new Course("Unani Medicine and Surgery"));
        courseRepository.save(new Course("Fashion Design & Product Development"));
        courseRepository.save(new Course("Food Science & Technology"));
        courseRepository.save(new Course("Siddha Medicine and Surgery"));
        courseRepository.save(new Course("Nursing"));
        courseRepository.save(new Course("Information and Communication Technology (ICT)"));
        courseRepository.save(new Course("Agricultural Technology & Management"));
        courseRepository.save(new Course("Health Promotion"));
        courseRepository.save(new Course("Pharmacy"));
        courseRepository.save(new Course("Medical Laboratory Sciences"));
        courseRepository.save(new Course("Radiography"));
        courseRepository.save(new Course("Physiotherapy"));
        courseRepository.save(new Course("Environmental Conservation & Management"));
        courseRepository.save(new Course("Facilities Management"));
        courseRepository.save(new Course("Transport & Logistic Management"));
        courseRepository.save(new Course("Biochemistry & Molecular Biology"));
        courseRepository.save(new Course("Industrial Statistics & Mathematical Finance"));
        courseRepository.save(new Course("Statistics & Operations Research"));
        courseRepository.save(new Course("Fisheries & Marine Sciences"));
        courseRepository.save(new Course("Islamic Studies"));
        courseRepository.save(new Course("Science and Technology"));
        courseRepository.save(new Course("Computer Science & Technology"));
        courseRepository.save(new Course("Entrepreneurship and Management"));
        courseRepository.save(new Course("Animal Science"));
        courseRepository.save(new Course("Music"));
        courseRepository.save(new Course("Dance"));
        courseRepository.save(new Course("Art & Design"));
        courseRepository.save(new Course("Drama & Theatre"));
        courseRepository.save(new Course("Visual & Technological Arts"));
        courseRepository.save(new Course("Export Agriculture"));
        courseRepository.save(new Course("Tea Technology & Value Addition"));
        courseRepository.save(new Course("Industrial Information Technology"));
        courseRepository.save(new Course("Mineral Resources and Technology"));
        courseRepository.save(new Course("Business Information Systems (Honours) (BIS)"));
        courseRepository.save(new Course("Management and Information Technology (SEUSL)"));
        courseRepository.save(new Course("Computing & Information Systems"));
        courseRepository.save(new Course("Physical Education"));
        courseRepository.save(new Course("Sport Science & Management"));
        courseRepository.save(new Course("Speech and Hearing Sciences"));
        courseRepository.save(new Course("Arabic Language"));
        courseRepository.save(new Course("Visual Arts"));
        courseRepository.save(new Course("Animal Science & Fisheries"));
        courseRepository.save(new Course("Food Production & Technology Management"));
        courseRepository.save(new Course("Aquatic Resources Technology"));
        courseRepository.save(new Course("Palm & Latex Technology & Value Addition"));
        courseRepository.save(new Course("Hospitality, Tourism and Events Management"));
        courseRepository.save(new Course("Information Technology & Management"));
        courseRepository.save(new Course("Tourism & Hospitality Management"));
        courseRepository.save(new Course("Agricultural Resource Management and Technology"));
        courseRepository.save(new Course("Agribusiness Management"));
        courseRepository.save(new Course("Green Technology"));
        courseRepository.save(new Course("Information Systems"));
        courseRepository.save(new Course("Landscape Architecture"));
        courseRepository.save(new Course("Translation Studies"));
        courseRepository.save(new Course("Software Engineering"));
        courseRepository.save(new Course("Film & Television Studies"));
        courseRepository.save(new Course("Project Mangement"));
        courseRepository.save(new Course("Engineering Technology (ET)"));
        courseRepository.save(new Course("Biosystems Technology (BST)"));
        courseRepository.save(new Course("Information Communication Technology"));
        courseRepository.save(new Course("Teaching English as a Second Language (TESL)"));
        courseRepository.save(new Course("Marine and Freshwater Sciences"));
        courseRepository.save(new Course("Food Business Management"));
        courseRepository.save(new Course("Physical Science - ICT"));
        courseRepository.save(new Course("Business Science"));
        courseRepository.save(new Course("Financial Engineering"));
        courseRepository.save(new Course("Geographical Information Science"));
        courseRepository.save(new Course("Social Work"));
        courseRepository.save(new Course("Financial Mathematics and Industrial Statistics"));
        courseRepository.save(new Course("Human Resource Development"));
        courseRepository.save(new Course("Occupational Therapy"));
        courseRepository.save(new Course("Optometry"));
        courseRepository.save(new Course("Artificial Intelligence"));
        courseRepository.save(new Course("Applied Chemistry"));
        courseRepository.save(new Course("Electronics and Computer Science"));
        courseRepository.save(new Course("Indigenous Medicinal Resources"));
        courseRepository.save(new Course("Health Information and Communication Technology"));
        courseRepository.save(new Course("Health Tourism and Hospitality Management"));
        courseRepository.save(new Course("Biomedical Technology"));
        courseRepository.save(new Course("Indigenous Pharmaceutical Technology"));
        courseRepository.save(new Course("Yoga and Parapsychology"));
        courseRepository.save(new Course("Social Studies in Indigenous Knowledge"));
        courseRepository.save(new Course("Accounting Information Systems"));
        courseRepository.save(new Course("Arts - Information Technology"));
        courseRepository.save(new Course("Aquatic Bio resources"));
        courseRepository.save(new Course("Urban Bio Resources"));
    }
}
