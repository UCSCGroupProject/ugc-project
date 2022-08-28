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

        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("University of Colombo"), "013A"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("University of Peradeniya"), "013B"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("University of Sri Jayewardenepura"), "013C"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("University of Kelaniya"), "013D"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("University of Jaffna"), "013E"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("University of Ruhuna"), "013F"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("Eastern University, Sri Lanka"), "013H"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science"), this.getUniversity("South Eastern University of Sri Lanka"), "013J"));

        unicodeRepository.save(new Unicode(this.getCourse("Surveying Science"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "014L"));

        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences"), this.getUniversity("Rajarata University of Sri Lanka"), "015K"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "015L"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences"), this.getUniversity("Wayamba University of Sri Lanka"), "015M"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences"), this.getUniversity("University of Jaffna"), "015R"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences"), this.getUniversity("Trincomalee Campus"), "015W"));

        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("University of Colombo"), "016A"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("University of Peradeniya"), "016B"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("University of Sri Jayewardenepura"), "016C"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("University of Kelaniya"), "016D"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("University of Jaffna"), "016E"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("University of Ruhuna"), "016F"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("Eastern University, Sri Lanka"), "016H"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("South Eastern University of Sri Lanka"), "016J"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("Rajarata University of Sri Lanka"), "016K"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "016L"));
        unicodeRepository.save(new Unicode(this.getCourse("Management"), this.getUniversity("Wayamba University of Sri Lanka"), "016M"));

        unicodeRepository.save(new Unicode(this.getCourse("Estate Management & Valuation"), this.getUniversity("University of Sri Jayewardenepura"), "017C"));

        unicodeRepository.save(new Unicode(this.getCourse("Commerce"), this.getUniversity("University of Sri Jayewardenepura"), "018C"));
        unicodeRepository.save(new Unicode(this.getCourse("Commerce"), this.getUniversity("University of Kelaniya"), "018D"));
        unicodeRepository.save(new Unicode(this.getCourse("Commerce"), this.getUniversity("University of Jaffna"), "018E"));
        unicodeRepository.save(new Unicode(this.getCourse("Commerce"), this.getUniversity("Eastern University, Sri Lanka"), "018H"));
        unicodeRepository.save(new Unicode(this.getCourse("Commerce"), this.getUniversity("South Eastern University of Sri Lanka"), "018J"));

        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("University of Colombo"), "019A"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("University of Peradeniya"), "019B"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("University of Sri Jayewardenepura"), "019C"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("University of Kelaniya"), "019D"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("University of Jaffna"), "019E"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("University of Ruhuna"), "019F"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("Eastern University, Sri Lanka"), "019H"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("South Eastern University of Sri Lanka"), "019J"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts"), this.getUniversity("Rajarata University of Sri Lanka"), "019K"));

        unicodeRepository.save(new Unicode(this.getCourse("Arts (SP) - Mass Media"), this.getUniversity("University of Colombo (Sripalee Campus)"), "020S"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts (SP) - Performing Arts"), this.getUniversity("University of Colombo (Sripalee Campus)"), "041S"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts (SAB)"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "021L"));

        unicodeRepository.save(new Unicode(this.getCourse("Management Studies (TV)"), this.getUniversity("Eastern University, Sri Lanka"), "022W"));
        unicodeRepository.save(new Unicode(this.getCourse("Management Studies (TV)"), this.getUniversity("University of Jaffna"), "022R"));

        unicodeRepository.save(new Unicode(this.getCourse("Architecture"), this.getUniversity("University of Moratuwa"), "023G"));

        unicodeRepository.save(new Unicode(this.getCourse("Design"), this.getUniversity("University of Moratuwa"), "024G"));

        unicodeRepository.save(new Unicode(this.getCourse("Law"), this.getUniversity("University of Colombo"), "025A"));
        unicodeRepository.save(new Unicode(this.getCourse("Law"), this.getUniversity("University of Peradeniya"), "025B"));
        unicodeRepository.save(new Unicode(this.getCourse("Law"), this.getUniversity("University of Jaffna"), "025E"));

        unicodeRepository.save(new Unicode(this.getCourse("Information Technology (IT)"), this.getUniversity("University of Moratuwa"), "026G"));

        unicodeRepository.save(new Unicode(this.getCourse("Management and Information Technology (MIT)"), this.getUniversity("University of Kelaniya"), "027D"));

        unicodeRepository.save(new Unicode(this.getCourse("Management (Public) Honours"), this.getUniversity("University of Sri Jayewardenepura"), "028C"));

        unicodeRepository.save(new Unicode(this.getCourse("Communication Studies"), this.getUniversity("Trincomalee Campus"), "029W"));

        unicodeRepository.save(new Unicode(this.getCourse("Town and Country Planning"), this.getUniversity("University of Moratuwa"), "030G"));

        unicodeRepository.save(new Unicode(this.getCourse("Peace and Conflict Resolution"), this.getUniversity("University of Kelaniya"), "031D"));

        unicodeRepository.save(new Unicode(this.getCourse("Ayurvedic Medicine and Surgery"), this.getUniversity("Institute of Indigenous Medicine"), "032N"));
        unicodeRepository.save(new Unicode(this.getCourse("Ayurvedic Medicine and Surgery"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "032P"));

        unicodeRepository.save(new Unicode(this.getCourse("Unani Medicine and Surgery"), this.getUniversity("Institute of Indigenous Medicine"), "033N"));

        unicodeRepository.save(new Unicode(this.getCourse("Fashion Design & Product Development"), this.getUniversity("University of Moratuwa"), "034G"));

        unicodeRepository.save(new Unicode(this.getCourse("Food Science & Technology"), this.getUniversity("University of Peradeniya"), "035B"));
        unicodeRepository.save(new Unicode(this.getCourse("Food Science & Technology"), this.getUniversity("University of Sri Jayewardenepura"), "035C"));
        unicodeRepository.save(new Unicode(this.getCourse("Food Science & Technology"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "035L"));

        unicodeRepository.save(new Unicode(this.getCourse("Siddha Medicine and Surgery"), this.getUniversity("University of Jaffna"), "036E"));
        unicodeRepository.save(new Unicode(this.getCourse("Siddha Medicine and Surgery"), this.getUniversity("Trincomalee Campus"), "036W"));

        unicodeRepository.save(new Unicode(this.getCourse("Nursing"), this.getUniversity("University of Colombo"), "037A"));
        unicodeRepository.save(new Unicode(this.getCourse("Nursing"), this.getUniversity("University of Peradeniya"), "037B"));
        unicodeRepository.save(new Unicode(this.getCourse("Nursing"), this.getUniversity("University of Sri Jayewardenepura"), "037C"));
        unicodeRepository.save(new Unicode(this.getCourse("Nursing"), this.getUniversity("University of Jaffna"), "037E"));
        unicodeRepository.save(new Unicode(this.getCourse("Nursing"), this.getUniversity("University of Ruhuna"), "037F"));
        unicodeRepository.save(new Unicode(this.getCourse("Nursing"), this.getUniversity("Eastern University, Sri Lanka"), "037H"));

        unicodeRepository.save(new Unicode(this.getCourse("Information and Communication Technology (ICT)"), this.getUniversity("Rajarata University of Sri Lanka"), "038K"));
        unicodeRepository.save(new Unicode(this.getCourse("Information and Communication Technology (ICT)"), this.getUniversity("University of Jaffna"), "038R"));

        unicodeRepository.save(new Unicode(this.getCourse("Architectural Technology & Management"), this.getUniversity("University of Peradeniya"), "039B"));

        unicodeRepository.save(new Unicode(this.getCourse("Health Promotion"), this.getUniversity("Rajarata University of Sri Lanka"), "050K"));

        unicodeRepository.save(new Unicode(this.getCourse("Pharmacy"), this.getUniversity("University of Peradeniya"), "051B"));
        unicodeRepository.save(new Unicode(this.getCourse("Pharmacy"), this.getUniversity("University of Sri Jayewardenepura"), "051C"));
        unicodeRepository.save(new Unicode(this.getCourse("Pharmacy"), this.getUniversity("University of Jaffna"), "051E"));
        unicodeRepository.save(new Unicode(this.getCourse("Pharmacy"), this.getUniversity("University of Ruhuna"), "051F"));

        unicodeRepository.save(new Unicode(this.getCourse("Medical Laboratory Sciences"), this.getUniversity("University of Peradeniya"), "052B"));
        unicodeRepository.save(new Unicode(this.getCourse("Medical Laboratory Sciences"), this.getUniversity("University of Sri Jayewardenepura"), "052C"));
        unicodeRepository.save(new Unicode(this.getCourse("Medical Laboratory Sciences"), this.getUniversity("University of Jaffna"), "052E"));
        unicodeRepository.save(new Unicode(this.getCourse("Medical Laboratory Sciences"), this.getUniversity("University of Ruhuna"), "052F"));

        unicodeRepository.save(new Unicode(this.getCourse("Radiography"), this.getUniversity("University of Peradeniya"), "053B"));

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
