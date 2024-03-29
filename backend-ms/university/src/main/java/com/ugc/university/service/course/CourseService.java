package com.ugc.university.service.course;

import com.netflix.discovery.converters.Auto;
import com.ugc.university.model.alsubject.ALSubjectDependency;
import com.ugc.university.model.course.Course;
import com.ugc.university.model.course.Stream;
import com.ugc.university.model.course.Unicode;
import com.ugc.university.model.olsubject.OLSubjectDependency;
import com.ugc.university.payload.request.alsubject.Req_ChoosedALSubjects;
import com.ugc.university.payload.request.ol_al.Req_OLALSubjects;
import com.ugc.university.payload.request.olsubject.Req_OLSubjectsWithResults;
import com.ugc.university.payload.response.PayloadResponse;
import com.ugc.university.payload.response.ResType;
import com.ugc.university.payload.response.course.*;
import com.ugc.university.payload.response.objects.ALSubjectRecord;
import com.ugc.university.payload.response.objects.OLSubjectRecord;
import com.ugc.university.payload.response.objects.UnicodeRecord;
import com.ugc.university.repository.alsubject.ALSubjectDependencyRepository;
import com.ugc.university.repository.course.CourseRepository;
import com.ugc.university.repository.course.StreamRepository;
import com.ugc.university.repository.course.UnicodeRepository;
import com.ugc.university.repository.olsubject.OLSubjectDependencyRepository;
import com.ugc.university.service.alsubject.ALSubjectDependencyService;
import com.ugc.university.service.olsubject.OLSubjectDependencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;


    @Autowired
    StreamRepository streamRepository;
    @Autowired
    UnicodeRepository unicodeRepository;
    @Autowired
    ALSubjectDependencyRepository alSubjectDependencyRepository;
    @Autowired
    OLSubjectDependencyRepository olSubjectDependencyRepository;


    @Autowired
    private OLSubjectDependencyService olSubjectDependencyService;

    @Autowired
    private ALSubjectDependencyService alSubjectDependencyService;

    public void initCourses() {
        Stream arts = streamRepository.findByStreamName("Arts");
        Stream commerce = streamRepository.findByStreamName("Commerce");
        Stream biologicalScience = streamRepository.findByStreamName("Biological Science");
        Stream physicalScience = streamRepository.findByStreamName("Physical Science");
        Stream engineeringTechnology = streamRepository.findByStreamName("Engineering Technology");
        Stream biosystemsTechnology = streamRepository.findByStreamName("Biosystems Technology");
        Stream other = streamRepository.findByStreamName("Other");

        courseRepository.save(new Course("Arts", arts, "019", 6985));
        courseRepository.save(new Course("Arts (SP) - Mass Media", arts, "020", 110));
        courseRepository.save(new Course("Arts (SP) - Performing Arts", arts, "041", 110));
        courseRepository.save(new Course("Arts (SAB)", arts, "021", 309));
        courseRepository.save(new Course("Communication Studies", arts, "029", 200));
        courseRepository.save(new Course("Peace and Conflict Resolution", arts, "031", 36));
        courseRepository.save(new Course("Islamic Studies", arts, "063", 278));
        courseRepository.save(new Course("Arabic Language", arts, "084", 225));
        courseRepository.save(new Course("Teaching English as a Second Language (TESL)", arts, "105", 81));
        courseRepository.save(new Course("Music", arts, "068", 520));
        courseRepository.save(new Course("Dance", arts, "069", 494));
        courseRepository.save(new Course("Drama & Theatre", arts, "071", 178));
        courseRepository.save(new Course("Visual Arts", arts, "085", 120));
        courseRepository.save(new Course("Art & Design", arts, "070", 62));
        courseRepository.save(new Course("Visual & Technological Arts", arts, "072", 94));
        courseRepository.save(new Course("Social Work", arts, "112", 51));
        courseRepository.save(new Course("Arts - Information Technology", arts, "128", 50));

        courseRepository.save(new Course("Management", commerce, "016", 5336));
        courseRepository.save(new Course("Management (Public) Honours", commerce, "028", 114));
        courseRepository.save(new Course("Estate Management & Valuation", commerce, "017", 88));
        courseRepository.save(new Course("Commerce", commerce, "018", 899));
        courseRepository.save(new Course("Management Studies (TV)", commerce, "022", 458));
        courseRepository.save(new Course("Business Information Systems (Honours) (BIS)", commerce, "077", 80));
        courseRepository.save(new Course("Accounting Information Systems", commerce, "127", 50));

        courseRepository.save(new Course("Medicine", biologicalScience, "001", 1864));
        courseRepository.save(new Course("Dental Surgery", biologicalScience, "002", 153));
        courseRepository.save(new Course("Veterinary Science", biologicalScience, "003", 130));
        courseRepository.save(new Course("Agricultural Technology & Management", biologicalScience, "039", 221));
        courseRepository.save(new Course("Agriculture", biologicalScience, "004", 889));
        courseRepository.save(new Course("Food science & Nutrition", biologicalScience, "005", 164));
        courseRepository.save(new Course("Food Science & Technology", biologicalScience, "035", 218));
        courseRepository.save(new Course("Ayurvedic Medicine and Surgery", biologicalScience, "032", 383));
        courseRepository.save(new Course("Unani Medicine and Surgery", biologicalScience, "033", 89));
        courseRepository.save(new Course("Siddha Medicine and Surgery", biologicalScience, "036", 247));
        courseRepository.save(new Course("Biological Science", biologicalScience, "006", 1686));
        courseRepository.save(new Course("Applied Sciences (Biological Science)", biologicalScience, "007", 410));
        courseRepository.save(new Course("Health Promotion", biologicalScience, "050", 103));
        courseRepository.save(new Course("Nursing", biologicalScience, "037", 559));
        courseRepository.save(new Course("Pharmacy", biologicalScience, "051", 227));
        courseRepository.save(new Course("Medical Laboratory Sciences", biologicalScience, "052", 224));
        courseRepository.save(new Course("Radiography", biologicalScience, "053", 68));
        courseRepository.save(new Course("Physiotherapy", biologicalScience, "054", 101));
        courseRepository.save(new Course("Biochemistry & Molecular Biology", biologicalScience, "058", 80));
        courseRepository.save(new Course("Fisheries & Marine Sciences", biologicalScience, "062", 120));
        courseRepository.save(new Course("Environmental Conservation & Management", biologicalScience, "055", 109));
        courseRepository.save(new Course("Animal Science & Fisheries", biologicalScience, "086", 74));
        courseRepository.save(new Course("Food Production & Technology Management", biologicalScience, "087", 139));
        courseRepository.save(new Course("Agricultural Resource Management and Technology", biologicalScience, "093", 181));
        courseRepository.save(new Course("Agribusiness Management", biologicalScience, "094", 78));
        courseRepository.save(new Course("Green Technology", biologicalScience, "095", 72));
        courseRepository.save(new Course("Animal Science", biologicalScience, "067", 108));
        courseRepository.save(new Course("Export Agriculture", biologicalScience, "073", 105));
        courseRepository.save(new Course("Aquatic Resources Technology", biologicalScience, "088", 114));
        courseRepository.save(new Course("Occupational Therapy", biologicalScience, "115", 50));
        courseRepository.save(new Course("Optometry", biologicalScience, "116", 60));
        courseRepository.save(new Course("Applied Chemistry", biologicalScience, "118", 60));
        courseRepository.save(new Course("Indigenous Medicinal Resources", biologicalScience, "120", 50));
        courseRepository.save(new Course("Aquatic Bioresources", biologicalScience, "129", 50));
        courseRepository.save(new Course("Urban Bio Resources", biologicalScience, "130", 50));

        courseRepository.save(new Course("Engineering", physicalScience, "008", 2213));
        courseRepository.save(new Course("Engineering (EM)", physicalScience, "009", 80));
        courseRepository.save(new Course("Engineering (TM)", physicalScience, "010", 98));
        courseRepository.save(new Course("Physical Science", physicalScience, "013", 2327));
        courseRepository.save(new Course("Computer Science", physicalScience, "012", 647));
        courseRepository.save(new Course("Applied Sciences (Physical Sciences)", physicalScience, "015", 768));
        courseRepository.save(new Course("Transport & Logistic Management", physicalScience, "057", 91));
        courseRepository.save(new Course("Industrial Statistics & Mathematical Finance", physicalScience, "059", 121));
        courseRepository.save(new Course("Statistics & Operations Research", physicalScience, "060", 79));
        courseRepository.save(new Course("Computing & Information Systems", physicalScience, "080", 178));
        courseRepository.save(new Course("Physical Science - ICT", physicalScience, "108", 156));
        courseRepository.save(new Course("Artificial Intelligence", physicalScience, "117", 50));
        courseRepository.save(new Course("Electronics and Computer Science", physicalScience, "119", 80));

        courseRepository.save(new Course("Engineering Technology (ET)", engineeringTechnology, "102", 1301));

        courseRepository.save(new Course("Biosystems Technology (BST)", biosystemsTechnology, "103", 1221));
        courseRepository.save(new Course("Information Communication Technology", biosystemsTechnology, "104", 884));

        courseRepository.save(new Course("Information Technology (IT)", other, "026", 251));
        courseRepository.save(new Course("Management & Information Technology (MIT)", other, "027", 119));
        courseRepository.save(new Course("Quantity Surveying", other, "011", 152));
        courseRepository.save(new Course("Surveying Science", other, "014", 165));
        courseRepository.save(new Course("Town & Country Planning", other, "030", 88));
        courseRepository.save(new Course("Architecture", other, "023", 100));
        courseRepository.save(new Course("Fashion Design & Product Development", other, "034", 79));
        courseRepository.save(new Course("Landscape Architecture", other, "097", 81));
        courseRepository.save(new Course("Design", other, "024", 87));
        courseRepository.save(new Course("Law", other, "025", 495));
        courseRepository.save(new Course("Facilities Management", other, "056", 81));
        courseRepository.save(new Course("Management and Information Technology (SEUSL)", other, "079", 170));
        courseRepository.save(new Course("Science and Technology", other, "064", 107));
        courseRepository.save(new Course("Computer Science & Technology", other, "065", 101));
        courseRepository.save(new Course("Entrepreneurship and Management", other, "066", 101));
        courseRepository.save(new Course("Tea Technology & Value Addition", other, "074", 112));
        courseRepository.save(new Course("Industrial Information Technology", other, "075", 100));
        courseRepository.save(new Course("Mineral Resources and Technology", other, "076", 106));
        courseRepository.save(new Course("Palm & Latex Technology & Value Addition", other, "089", 104));
        courseRepository.save(new Course("Hospitality, Tourism and Events Management", other, "090", 107));
        courseRepository.save(new Course("Physical Education", other, "081", 147));
        courseRepository.save(new Course("Sports Science & Management", other, "082", 228));
        courseRepository.save(new Course("Speech and Hearing Sciences", other, "083", 84));
        courseRepository.save(new Course("Information and Communication Technology (ICT)", other, "091", 127));
        courseRepository.save(new Course("Tourism & Hospitality Management", other, "092", 181));
        courseRepository.save(new Course("Information Systems", other, "096", 120));
        courseRepository.save(new Course("Translation Studies", other, "098", 138));
        courseRepository.save(new Course("Film & Television Studies", other, "100", 71));
        courseRepository.save(new Course("Project Management", other, "101", 101));
        courseRepository.save(new Course("Information Technology & Management", other, "038", 285));
        courseRepository.save(new Course("Software Engineering", other, "099", 121));
        courseRepository.save(new Course("Food Business Management", other, "107", 135));
        courseRepository.save(new Course("Marine and Freshwater Sciences", other, "106", 90));
        courseRepository.save(new Course("Business Science", other, "109", 149));
        courseRepository.save(new Course("Financial Engineering", other, "110", 81));
        courseRepository.save(new Course("Geographical Information Science", other, "111", 75));
        courseRepository.save(new Course("Financial Mathematics and Industrial Statistics", other, "113", 73));
        courseRepository.save(new Course("Human Resource Development", other, "114", 85));
        courseRepository.save(new Course("Health Information and Communication Technology", other, "121", 50));
        courseRepository.save(new Course("Health Tourism and Hospitality Management", other, "122", 50));
        courseRepository.save(new Course("Biomedical Technology", other, "123", 50));
        courseRepository.save(new Course("Indigenous Pharmaceutical Technology", other, "124", 50));
        courseRepository.save(new Course("Yoga and Parapsychology", other, "125", 50));
        courseRepository.save(new Course("Social Studies in Indigenous Knowledge", other, "126", 50));
    }

    public List<CourseResponse> getAllCourseList() {
        List<CourseResponse> courseResponseList = new ArrayList<>();
        List<Course> courseList = courseRepository.findAll();
        courseList.forEach(item -> {
            CourseResponse courseResponse = new CourseResponse(
                    item.getId(),
                    item.getName(),
                    item.getStream().getStreamName(),
                    item.getCode(),
                    item.getProposedIntakes()
            );

            courseResponseList.add(courseResponse);
        });

        return courseResponseList;
    }

    public List<CourseResponse> getRecommendedCourseList(Req_OLALSubjects req_olalSubjects) {
        List<CourseResponse> courseResponseList = new ArrayList<>();
        List<Course> courseList = courseRepository.findAll();

        courseList.forEach(item -> {
            // Check ol dependencies
            Boolean isOLResultsCompatible = olSubjectDependencyService.performDependencyCheckWithResults(
                new Req_OLSubjectsWithResults(
                        req_olalSubjects.englishResult,
                        req_olalSubjects.mathematicsResult,
                        req_olalSubjects.scienceResult,
                        item.getCode()
                )
            );

            // Check al dependencies
            Boolean isALResultsCompatible = alSubjectDependencyService.performDependencyCheck(
                    new Req_ChoosedALSubjects(
                            req_olalSubjects.firstSubject,
                            req_olalSubjects.secondSubject,
                            req_olalSubjects.thirdSubject,
                            item.getCode()
                    )
            );


            // Add courses
            if(isOLResultsCompatible && isALResultsCompatible) {
                CourseResponse courseResponse = new CourseResponse(
                        item.getId(),
                        item.getName(),
                        item.getStream().getStreamName(),
                        item.getCode(),
                        item.getProposedIntakes()
                );

                courseResponseList.add(courseResponse);
            }
        });

        return courseResponseList;
    }

    public List<CourseDetailedResponse> getRecommendedDetailedCourseList(Req_OLALSubjects req_olalSubjects) {
        List<CourseDetailedResponse> courseDetailedResponseList = new ArrayList<>();
        List<Course> courseList = courseRepository.findAll();

        courseList.forEach(item -> {
            // Check ol dependencies
            Boolean isOLResultsCompatible = olSubjectDependencyService.performDependencyCheckWithResults(
                    new Req_OLSubjectsWithResults(
                            req_olalSubjects.englishResult,
                            req_olalSubjects.mathematicsResult,
                            req_olalSubjects.scienceResult,
                            item.getCode()
                    )
            );

            // Check al dependencies
            Boolean isALResultsCompatible = alSubjectDependencyService.performDependencyCheck(
                    new Req_ChoosedALSubjects(
                            req_olalSubjects.firstSubject,
                            req_olalSubjects.secondSubject,
                            req_olalSubjects.thirdSubject,
                            item.getCode()
                    )
            );

            if(isOLResultsCompatible && isALResultsCompatible) {
                CourseDetailedResponse courseDetailedResponse = new CourseDetailedResponse();

                courseDetailedResponse.setCourseName(item.getName());

                // Populating offered universities
                List<Unicode> unicodeList =unicodeRepository.findUnicodesByCourse(item);
                List<UnicodeRecord> unicodeRecords = new ArrayList<>();

                unicodeList.forEach(i -> {
                    UnicodeRecord unicodeRecord = new UnicodeRecord(
                            i.getUniversity().getUniversityDetails().getName(),
                            i.getUniversity().getUsername(),
                            i.getUnicodeValue()
                    );

                    unicodeRecords.add(unicodeRecord);
                });

                courseDetailedResponse.setOfferedUniversities(unicodeRecords);

                // Populate the final outcome
                courseDetailedResponseList.add(courseDetailedResponse);
            }
        });

        return courseDetailedResponseList;
    }

    public ResponseEntity<?> getCourseOverview(String courseCode) {
        Res_CourseOverview res_courseOverview = new Res_CourseOverview();

        Course course = courseRepository.findByCode(courseCode);

        if(course != null) {
            res_courseOverview.setCourseName(course.getName());
            res_courseOverview.setCourseCode(course.getCode());
            res_courseOverview.setStream(course.getStream().getStreamName());
            res_courseOverview.setIntakeAmount(course.getProposedIntakes());

            // Populating required AL subjects
            List<ALSubjectDependency> alSubjectDependencies = alSubjectDependencyRepository.findALSubjectDependenciesByCourse(course);

            List<ALSubjectRecord> requiredFirstSubjects = new ArrayList<>();
            List<ALSubjectRecord> requiredSecondSubjects = new ArrayList<>();
            List<ALSubjectRecord> requiredThirdSubjects = new ArrayList<>();

            alSubjectDependencies.forEach(item -> {
                if(item.getStatusIndex() == 1) {
                    requiredFirstSubjects.add(new ALSubjectRecord(item.getAlsubject().getName(), item.getMinGrade()));
                }

                if(item.getStatusIndex() == 2) {
                    requiredSecondSubjects.add(new ALSubjectRecord(item.getAlsubject().getName(), item.getMinGrade()));
                }

                if(item.getStatusIndex() == 3) {
                    requiredThirdSubjects.add(new ALSubjectRecord(item.getAlsubject().getName(), item.getMinGrade()));
                }
            });

            res_courseOverview.setRequiredFirstSubjects(requiredFirstSubjects);
            res_courseOverview.setRequiredSecondSubjects(requiredSecondSubjects);
            res_courseOverview.setRequiredThirdSubjects(requiredThirdSubjects);

            // Populating required OL subjects
            List<OLSubjectDependency> olSubjectDependencies = olSubjectDependencyRepository.findOLSubjectDependenciesByCourse(course);

            List<OLSubjectRecord> requiredOLSubjects = new ArrayList<>();

            olSubjectDependencies.forEach(item -> {
                requiredOLSubjects.add(new OLSubjectRecord(item.getOlsubject().getName(), item.getMinGrade()));
            });

            res_courseOverview.setRequiredOLSubjects(requiredOLSubjects);

            // Populating offered universities
            List<Unicode> unicodeList =unicodeRepository.findUnicodesByCourse(course);
            List<UnicodeRecord> unicodeRecords = new ArrayList<>();

            unicodeList.forEach(item -> {
                UnicodeRecord unicodeRecord = new UnicodeRecord(
                        item.getUniversity().getUniversityDetails().getName(),
                        item.getUniversity().getUsername(),
                        item.getUnicodeValue()
                );

                unicodeRecords.add(unicodeRecord);
            });

            res_courseOverview.setOfferedUniversities(unicodeRecords);

            return ResponseEntity.ok(new PayloadResponse(res_courseOverview, "Course overview", ResType.OK));
        } else {
            return ResponseEntity.ok(new PayloadResponse(res_courseOverview, "Course not found", ResType.BAD));
        }
    }

    public List<StreamResponse> getStreams() {
        List<StreamResponse> streamResponses = new ArrayList<>();
        List<Stream> streamList = streamRepository.findAll();
        streamList.forEach(item -> {
            StreamResponse streamResponse = new StreamResponse(
                    item.getId(),
                    item.getStreamName()
            );
            streamResponses.add(streamResponse);
        });
        return streamResponses;
    }

    public ResponseEntity<?> create(String name, String code, String stream, String intake) {
        Course course1 = courseRepository.findByName(name);
        if(course1 != null) {
            return ResponseEntity.ok(new PayloadResponse(null, "Course name already exists", ResType.BAD));
        }
        Course course2 = courseRepository.findByCode(code);
        if(course2 != null) {
            return ResponseEntity.ok(new PayloadResponse(null, "Course code already exists", ResType.BAD));
        }
        Stream stream1 = streamRepository.getById(Integer.parseInt(stream));
        Course course = new Course(
                name,
                stream1,
                code,
                Integer.parseInt(intake)
        );
        courseRepository.save(course);

        return ResponseEntity.ok(new PayloadResponse(null, "Course created", ResType.OK));
    }

    public CourseResponse getCourseDetails(Integer courseId) {
        Course course = courseRepository.getById(courseId);
        CourseResponse courseResponse = new CourseResponse(
                course.getId(),
                course.getName(),
                course.getStream().getId().toString(),
                course.getCode(),
                course.getProposedIntakes()
        );
        System.out.println(course.getStream().getStreamName());
        return courseResponse;
    }

    public ResponseEntity<?> update(String id, String name, String code, String stream, String intake) {
        Course course = courseRepository.getById(Integer.valueOf(id));
        if(name!=null){
            course.setName(name);
        }
        if(code!=null){
            course.setCode(code);
        }
        if(stream!=""){
            Stream stream1 = streamRepository.getById(Integer.parseInt(stream));
            course.setStream(stream1);
        }
        if(intake!=null){
            System.out.println(intake);
            course.setProposedIntakes(Integer.valueOf(intake));
        }
        courseRepository.save(course);
        return ResponseEntity.ok(new PayloadResponse(null, "Course updated", ResType.OK));
    }

    public ResponseEntity<?> delete(Integer courseId) {
        courseRepository.deleteById(courseId);
        return ResponseEntity.ok(new PayloadResponse(null, "Course deleted", ResType.OK));
    }



}
