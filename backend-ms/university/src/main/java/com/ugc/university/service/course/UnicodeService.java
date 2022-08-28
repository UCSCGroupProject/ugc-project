package com.ugc.university.service.course;

import com.ugc.university.model.University;
import com.ugc.university.model.UniversityDetails;
import com.ugc.university.model.course.Course;
import com.ugc.university.model.course.Unicode;
import com.ugc.university.repository.UniversityDetailsRepository;
import com.ugc.university.repository.UniversityRepository;
import com.ugc.university.repository.course.CourseRepository;
import com.ugc.university.repository.course.UnicodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnicodeService {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    UniversityRepository universityRepository;
    @Autowired
    UniversityDetailsRepository universityDetailsRepository;
    @Autowired
    UnicodeRepository unicodeRepository;

    public void initUnicodes() {
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Colombo"), "001A"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Peradeniya"), "001B"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Sri Jayewardenepura"), "001C"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Kelaniya"), "001D"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Jaffna"), "001E"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Ruhuna"), "001F"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("University of Moratuwa"), "001G"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("Eastern University, Sri Lanka"), "001H"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("Rajarata University of Sri Lanka"), "001K"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "001L"));
        unicodeRepository.save(new Unicode(this.getCourse("Medicine"), this.getUniversity("Wayamba University of Sri Lanka"), "001M"));

        unicodeRepository.save(new Unicode(this.getCourse("Dental Surgery"), this.getUniversity("University of Peradeniya"), "002B"));
        unicodeRepository.save(new Unicode(this.getCourse("Dental Surgery"), this.getUniversity("University of Sri Jayewardenepura"), "002C"));

        unicodeRepository.save(new Unicode(this.getCourse("Veterinary Science"), this.getUniversity("University of Peradeniya"), "003B"));

        unicodeRepository.save(new Unicode(this.getCourse("Agriculture"), this.getUniversity("University of Jaffna"), "004E"));
        unicodeRepository.save(new Unicode(this.getCourse("Agriculture"), this.getUniversity("Eastern University, Sri Lanka"), "004H"));
        unicodeRepository.save(new Unicode(this.getCourse("Agriculture"), this.getUniversity("Rajarata University of Sri Lanka"), "004K"));
        unicodeRepository.save(new Unicode(this.getCourse("Agriculture"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "004L"));
        unicodeRepository.save(new Unicode(this.getCourse("Agriculture"), this.getUniversity("Wayamba University of Sri Lanka"), "004M"));

        unicodeRepository.save(new Unicode(this.getCourse("Food science & Nutrition"), this.getUniversity("Wayamba University of Sri Lanka"), "005M"));

        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("University of Colombo"), "006A"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("University of Peradeniya"), "006B"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("University of Sri Jayewardenepura"), "006B"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("University of Kelaniya"), "006D"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("University of Jaffna"), "006E"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("University of Ruhuna"), "006F"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("Eastern University, Sri Lanka"), "006H"));
        unicodeRepository.save(new Unicode(this.getCourse("Biological Science"), this.getUniversity("South Eastern University of Sri Lanka"), "006J"));

        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Biological Science)"), this.getUniversity("Rajarata University of Sri Lanka"), "007K"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Biological Science)"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "007L"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Biological Science)"), this.getUniversity("Vavuniya Campus"), "007R"));

        unicodeRepository.save(new Unicode(this.getCourse("Engineering"), this.getUniversity("University of Peradeniya"), "008B"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering"), this.getUniversity("University of Sri Jayewardenepura"), "008C"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering"), this.getUniversity("University of Jaffna"), "008E"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering"), this.getUniversity("University of Ruhuna"), "008F"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering"), this.getUniversity("University of Moratuwa"), "008G"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering"), this.getUniversity("South Eastern University of Sri Lanka"), "008J"));

        unicodeRepository.save(new Unicode(this.getCourse("Engineering (EM)"), this.getUniversity("University of Moratuwa"), "009G"));

        unicodeRepository.save(new Unicode(this.getCourse("Engineering (TM)"), this.getUniversity("University of Moratuwa"), "010G"));

        unicodeRepository.save(new Unicode(this.getCourse("Quantity Surveying"), this.getUniversity("University of Moratuwa"), "011G"));

        unicodeRepository.save(new Unicode(this.getCourse("Computer Science"), this.getUniversity("University of Kelaniya"), "012D"));
        unicodeRepository.save(new Unicode(this.getCourse("Computer Science"), this.getUniversity("University of Jaffna"), "012E"));
        unicodeRepository.save(new Unicode(this.getCourse("Computer Science"), this.getUniversity("University of Ruhuna"), "012F"));
        unicodeRepository.save(new Unicode(this.getCourse("Computer Science"), this.getUniversity("University of Colombo School of Computing"), "012T"));
        unicodeRepository.save(new Unicode(this.getCourse("Computer Science"), this.getUniversity("Trincomalee Campus"), "012W"));

    }

    public Course getCourse(String name){
        Course course = courseRepository.findByName(name);

        return course;
    }

    public University getUniversity(String name){
        UniversityDetails universityDetails = universityDetailsRepository.findByName(name);

        if(universityDetails != null){
            University university = universityRepository.findById(universityDetails.getId()).orElse(null);
            return university;
        } else {
            System.out.println("University Details not found");
            return null;
        }
    }
}
