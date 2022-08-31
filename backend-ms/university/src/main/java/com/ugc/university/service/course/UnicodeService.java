package com.ugc.university.service.course;

import com.ugc.university.model.University;
import com.ugc.university.model.UniversityDetails;
import com.ugc.university.model.course.Course;
import com.ugc.university.model.course.Unicode;
import com.ugc.university.payload.response.course.UniCourseResponse;
import com.ugc.university.repository.UniversityDetailsRepository;
import com.ugc.university.repository.UniversityRepository;
import com.ugc.university.repository.course.CourseRepository;
import com.ugc.university.repository.course.UnicodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Physical Sciences)"), this.getUniversity("Rajarata University of Sri Lanka"), "015K"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Physical Sciences)"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "015L"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Physical Sciences)"), this.getUniversity("Wayamba University of Sri Lanka"), "015M"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Physical Sciences)"), this.getUniversity("University of Jaffna"), "015R"));
        unicodeRepository.save(new Unicode(this.getCourse("Applied Sciences (Physical Sciences)"), this.getUniversity("Trincomalee Campus"), "015W"));

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

        unicodeRepository.save(new Unicode(this.getCourse("Arts (SP) - Mass Media"), this.getUniversity("Sripalee Campus"), "020S"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts (SP) - Performing Arts"), this.getUniversity("Sripalee Campus"), "041S"));
        unicodeRepository.save(new Unicode(this.getCourse("Arts (SAB)"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "021L"));

        unicodeRepository.save(new Unicode(this.getCourse("Management Studies (TV)"), this.getUniversity("Eastern University, Sri Lanka"), "022W"));
        unicodeRepository.save(new Unicode(this.getCourse("Management Studies (TV)"), this.getUniversity("University of Jaffna"), "022R"));

        unicodeRepository.save(new Unicode(this.getCourse("Architecture"), this.getUniversity("University of Moratuwa"), "023G"));

        unicodeRepository.save(new Unicode(this.getCourse("Design"), this.getUniversity("University of Moratuwa"), "024G"));

        unicodeRepository.save(new Unicode(this.getCourse("Law"), this.getUniversity("University of Colombo"), "025A"));
        unicodeRepository.save(new Unicode(this.getCourse("Law"), this.getUniversity("University of Peradeniya"), "025B"));
        unicodeRepository.save(new Unicode(this.getCourse("Law"), this.getUniversity("University of Jaffna"), "025E"));

        unicodeRepository.save(new Unicode(this.getCourse("Information Technology (IT)"), this.getUniversity("University of Moratuwa"), "026G"));

        unicodeRepository.save(new Unicode(this.getCourse("Management & Information Technology (MIT)"), this.getUniversity("University of Kelaniya"), "027D"));

        unicodeRepository.save(new Unicode(this.getCourse("Management (Public) Honours"), this.getUniversity("University of Sri Jayewardenepura"), "028C"));

        unicodeRepository.save(new Unicode(this.getCourse("Communication Studies"), this.getUniversity("Trincomalee Campus"), "029W"));

        unicodeRepository.save(new Unicode(this.getCourse("Town & Country Planning"), this.getUniversity("University of Moratuwa"), "030G"));

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

        unicodeRepository.save(new Unicode(this.getCourse("Agricultural Technology & Management"), this.getUniversity("University of Peradeniya"), "039B"));

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

        unicodeRepository.save(new Unicode(this.getCourse("Physiotherapy"), this.getUniversity("University of Colombo"), "054A"));
        unicodeRepository.save(new Unicode(this.getCourse("Physiotherapy"), this.getUniversity("University of Peradeniya"), "054B"));

        unicodeRepository.save(new Unicode(this.getCourse("Environmental Conservation & Management"), this.getUniversity("University of Kelaniya"), "055D"));

        unicodeRepository.save(new Unicode(this.getCourse("Facilities Management"), this.getUniversity("University of Moratuwa"), "056G"));

        unicodeRepository.save(new Unicode(this.getCourse("Transport & Logistic Management"), this.getUniversity("University of Moratuwa"), "057G"));

        unicodeRepository.save(new Unicode(this.getCourse("Biochemistry & Molecular Biology"), this.getUniversity("University of Colombo"), "058A"));

        unicodeRepository.save(new Unicode(this.getCourse("Industrial Statistics & Mathematical Finance"), this.getUniversity("University of Colombo"), "059A"));

        unicodeRepository.save(new Unicode(this.getCourse("Statistics & Operations Research"), this.getUniversity("University of Peradeniya"), "060B"));

        unicodeRepository.save(new Unicode(this.getCourse("Fisheries & Marine Sciences"), this.getUniversity("University of Ruhuna"), "062F"));

        unicodeRepository.save(new Unicode(this.getCourse("Islamic Studies"), this.getUniversity("South Eastern University of Sri Lanka"), "063J"));

        unicodeRepository.save(new Unicode(this.getCourse("Science and Technology"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "064U"));

        unicodeRepository.save(new Unicode(this.getCourse("Computer Science & Technology"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "065U"));

        unicodeRepository.save(new Unicode(this.getCourse("Entrepreneurship and Management"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "066U"));

        unicodeRepository.save(new Unicode(this.getCourse("Animal Science"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "067U"));

        unicodeRepository.save(new Unicode(this.getCourse("Music"), this.getUniversity("Ramanathan Academy of Fine Arts"), "068X"));
        unicodeRepository.save(new Unicode(this.getCourse("Music"), this.getUniversity("Swami Vipulananda Institute of Aesthetic Studies"), "068Y"));
        unicodeRepository.save(new Unicode(this.getCourse("Music"), this.getUniversity("University of the Visual & Performing Arts"), "068Z"));

        unicodeRepository.save(new Unicode(this.getCourse("Dance"), this.getUniversity("Ramanathan Academy of Fine Arts"), "069X"));
        unicodeRepository.save(new Unicode(this.getCourse("Dance"), this.getUniversity("Swami Vipulananda Institute of Aesthetic Studies"), "069Y"));
        unicodeRepository.save(new Unicode(this.getCourse("Dance"), this.getUniversity("University of the Visual & Performing Arts"), "069Z"));

        unicodeRepository.save(new Unicode(this.getCourse("Art & Design"), this.getUniversity("Ramanathan Academy of Fine Arts"), "070X"));

        unicodeRepository.save(new Unicode(this.getCourse("Drama & Theatre"), this.getUniversity("Swami Vipulananda Institute of Aesthetic Studies"), "071Y"));
        unicodeRepository.save(new Unicode(this.getCourse("Drama & Theatre"), this.getUniversity("University of the Visual & Performing Arts"), "071Z"));

        unicodeRepository.save(new Unicode(this.getCourse("Visual & Technological Arts"), this.getUniversity("Swami Vipulananda Institute of Aesthetic Studies"), "072Y"));

        unicodeRepository.save(new Unicode(this.getCourse("Export Agriculture"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "073U"));

        unicodeRepository.save(new Unicode(this.getCourse("Tea Technology & Value Addition"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "074U"));

        unicodeRepository.save(new Unicode(this.getCourse("Industrial Information Technology"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "075U"));

        unicodeRepository.save(new Unicode(this.getCourse("Mineral Resources and Technology"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "076U"));

        unicodeRepository.save(new Unicode(this.getCourse("Business Information Systems (Honours) (BIS)"), this.getUniversity("University of Sri Jayewardenepura"), "077C"));

        unicodeRepository.save(new Unicode(this.getCourse("Management and Information Technology (SEUSL)"), this.getUniversity("South Eastern University of Sri Lanka"), "079J"));

        unicodeRepository.save(new Unicode(this.getCourse("Computing & Information Systems"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "080L"));

        unicodeRepository.save(new Unicode(this.getCourse("Physical Education"), this.getUniversity("University of Jaffna"), "081E"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Education"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "081L"));

        unicodeRepository.save(new Unicode(this.getCourse("Sports Science & Management"), this.getUniversity("University of Sri Jayewardenepura"), "082C"));
        unicodeRepository.save(new Unicode(this.getCourse("Sports Science & Management"), this.getUniversity("University of Kelaniya"), "082D"));
        unicodeRepository.save(new Unicode(this.getCourse("Sports Science & Management"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "082L"));

        unicodeRepository.save(new Unicode(this.getCourse("Speech and Hearing Sciences"), this.getUniversity("University of Kelaniya"), "083D"));

        unicodeRepository.save(new Unicode(this.getCourse("Arabic Language"), this.getUniversity("South Eastern University of Sri Lanka"), "084J"));

        unicodeRepository.save(new Unicode(this.getCourse("Visual Arts"), this.getUniversity("University of the Visual & Performing Arts"), "085Z"));

        unicodeRepository.save(new Unicode(this.getCourse("Animal Science & Fisheries"), this.getUniversity("University of Peradeniya"), "086B"));

        unicodeRepository.save(new Unicode(this.getCourse("Food Production & Technology Management"), this.getUniversity("Wayamba University of Sri Lanka"), "087M"));

        unicodeRepository.save(new Unicode(this.getCourse("Aquatic Resources Technology"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "088U"));

        unicodeRepository.save(new Unicode(this.getCourse("Palm & Latex Technology & Value Addition"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "089U"));

        unicodeRepository.save(new Unicode(this.getCourse("Hospitality, Tourism and Events Management"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "090U"));

        unicodeRepository.save(new Unicode(this.getCourse("Information Technology & Management"), this.getUniversity("University of Moratuwa"), "091G"));

        unicodeRepository.save(new Unicode(this.getCourse("Tourism & Hospitality Management"), this.getUniversity("Rajarata University of Sri Lanka"), "092K"));
        unicodeRepository.save(new Unicode(this.getCourse("Tourism & Hospitality Management"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "092L"));

        unicodeRepository.save(new Unicode(this.getCourse("Agricultural Resource Management and Technology"), this.getUniversity("University of Ruhuna"), "093F"));

        unicodeRepository.save(new Unicode(this.getCourse("Agribusiness Management"), this.getUniversity("University of Ruhuna"), "094F"));

        unicodeRepository.save(new Unicode(this.getCourse("Green Technology"), this.getUniversity("University of Ruhuna"), "095F"));

        unicodeRepository.save(new Unicode(this.getCourse("Information Systems"), this.getUniversity("University of Colombo School of Computing"), "096T"));

        unicodeRepository.save(new Unicode(this.getCourse("Landscape Architecture"), this.getUniversity("University of Moratuwa"), "097G"));

        unicodeRepository.save(new Unicode(this.getCourse("Translation Studies"), this.getUniversity("University of Kelaniya"), "098D"));
        unicodeRepository.save(new Unicode(this.getCourse("Translation Studies"), this.getUniversity("University of Jaffna"), "098E"));
        unicodeRepository.save(new Unicode(this.getCourse("Translation Studies"), this.getUniversity("Eastern University, Sri Lanka"), "098H"));
        unicodeRepository.save(new Unicode(this.getCourse("Translation Studies"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "098L"));

        unicodeRepository.save(new Unicode(this.getCourse("Software Engineering"), this.getUniversity("University of Kelaniya"), "099D"));
        unicodeRepository.save(new Unicode(this.getCourse("Software Engineering"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "099L"));

        unicodeRepository.save(new Unicode(this.getCourse("Film & Television Studies"), this.getUniversity("University of Kelaniya"), "100D"));

        unicodeRepository.save(new Unicode(this.getCourse("Project Management"), this.getUniversity("Vavuniya Campus"), "101R"));

        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("University of Colombo"), "102A"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("University of Sri Jayewardenepura"), "102C"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("University of Kelaniya"), "102D"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("University of Jaffna"), "102E"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("University of Ruhuna"), "102F"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("Rajarata University of Sri Lanka"), "102K"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "102L"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("Wayamba University of Sri Lanka"), "102M"));
        unicodeRepository.save(new Unicode(this.getCourse("Engineering Technology (ET)"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "102U"));

        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("University of Colombo"), "103A"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("University of Sri Jayewardenepura"), "103C"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("University of Jaffna"), "103E"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("University of Ruhuna"), "103F"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("Eastern University, Sri Lanka"), "103H"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("South Eastern University of Sri Lanka"), "103J"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("Rajarata University of Sri Lanka"), "103K"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "103L"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("Wayamba University of Sri Lanka"), "103M"));
        unicodeRepository.save(new Unicode(this.getCourse("Biosystems Technology (BST)"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "103U"));

        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("University of Colombo"), "104A"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("University of Sri Jayewardenepura"), "104C"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("University of Kelaniya"), "104D"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("University of Ruhuna"), "104F"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("South Eastern University of Sri Lanka"), "104J"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("Rajarata University of Sri Lanka"), "104K"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("Vavuniya Campus"), "104R"));
        unicodeRepository.save(new Unicode(this.getCourse("Information Communication Technology"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "104U"));

        unicodeRepository.save(new Unicode(this.getCourse("Teaching English as a Second Language (TESL)"), this.getUniversity("University of Sri Jayewardenepura"), "105C"));
        unicodeRepository.save(new Unicode(this.getCourse("Teaching English as a Second Language (TESL)"), this.getUniversity("University of Kelaniya"), "105D"));

        unicodeRepository.save(new Unicode(this.getCourse("Marine and Freshwater Sciences"), this.getUniversity("University of Ruhuna"), "106F"));

        unicodeRepository.save(new Unicode(this.getCourse("Food Business Management"), this.getUniversity("Sabaragamuwa University of Sri Lanka"), "107L"));

        unicodeRepository.save(new Unicode(this.getCourse("Physical Science - ICT"), this.getUniversity("University of Sri Jayewardenepura"), "108C"));
        unicodeRepository.save(new Unicode(this.getCourse("Physical Science - ICT"), this.getUniversity("University of Kelaniya"), "108D"));

        unicodeRepository.save(new Unicode(this.getCourse("Business Science"), this.getUniversity("University of Moratuwa"), "109G"));

        unicodeRepository.save(new Unicode(this.getCourse("Financial Engineering"), this.getUniversity("University of Kelaniya"), "110D"));

        unicodeRepository.save(new Unicode(this.getCourse("Geographical Information Science"), this.getUniversity("University of Peradeniya"), "111B"));

        unicodeRepository.save(new Unicode(this.getCourse("Social Work"), this.getUniversity("University of Peradeniya"), "112B"));

        unicodeRepository.save(new Unicode(this.getCourse("Financial Mathematics and Industrial Statistics"), this.getUniversity("University of Ruhuna"), "113F"));

        unicodeRepository.save(new Unicode(this.getCourse("Human Resource Development"), this.getUniversity("Uva Wellassa University of Sri Lanka"), "114U"));

        unicodeRepository.save(new Unicode(this.getCourse("Occupational Therapy"), this.getUniversity("University of Kelaniya"), "115D"));

        unicodeRepository.save(new Unicode(this.getCourse("Optometry"), this.getUniversity("University of Sri Jayewardenepura"), "116C"));

        unicodeRepository.save(new Unicode(this.getCourse("Artificial Intelligence"), this.getUniversity("University of Moratuwa"), "117G"));

        unicodeRepository.save(new Unicode(this.getCourse("Applied Chemistry"), this.getUniversity("University of Kelaniya"), "118D"));

        unicodeRepository.save(new Unicode(this.getCourse("Electronics and Computer Science"), this.getUniversity("University of Kelaniya"), "119D"));

        unicodeRepository.save(new Unicode(this.getCourse("Indigenous Medicinal Resources"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "120P"));

        unicodeRepository.save(new Unicode(this.getCourse("Health Information and Communication Technology"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "121P"));

        unicodeRepository.save(new Unicode(this.getCourse("Health Tourism and Hospitality Management"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "122P"));

        unicodeRepository.save(new Unicode(this.getCourse("Biomedical Technology"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "123P"));

        unicodeRepository.save(new Unicode(this.getCourse("Indigenous Pharmaceutical Technology"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "124P"));

        unicodeRepository.save(new Unicode(this.getCourse("Yoga and Parapsychology"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "125P"));

        unicodeRepository.save(new Unicode(this.getCourse("Social Studies in Indigenous Knowledge"), this.getUniversity("The Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka"), "126P"));

        unicodeRepository.save(new Unicode(this.getCourse("Accounting Information Systems"), this.getUniversity("University of Kelaniya"), "127D"));

        unicodeRepository.save(new Unicode(this.getCourse("Arts - Information Technology"), this.getUniversity("University of Sri Jayewardenepura"), "128C"));

        unicodeRepository.save(new Unicode(this.getCourse("Aquatic Bioresources"), this.getUniversity("University of Sri Jayewardenepura"), "129C"));

        unicodeRepository.save(new Unicode(this.getCourse("Urban Bio Resources"), this.getUniversity("University of Sri Jayewardenepura"), "130C"));

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

    public List<UniCourseResponse> getAllUniCourseList(){
        List<UniCourseResponse> uniCourseResponseList = new ArrayList<>();

        List<Unicode> unicodeList = unicodeRepository.findAll();

        unicodeList.forEach(item -> {
            UniCourseResponse uniCourseResponse = new UniCourseResponse(
                    item.getId(),
                    item.getCourse().getName(),
                    item.getUniversity().getUniversityDetails().getName(),
                    item.getUnicodeValue()
            );

            uniCourseResponseList.add(uniCourseResponse);
        });

        return uniCourseResponseList;
    }
}
