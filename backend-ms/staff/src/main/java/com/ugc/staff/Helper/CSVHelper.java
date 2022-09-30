package com.ugc.staff.Helper;

import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.ALevel.ALStudentResult;
import com.ugc.staff.Repository.ALevel.ALSubjectRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.*;

public class CSVHelper {
    public static String TYPE = "text/csv";
    static String[] HEADERs = { "district", "district_rank", "index_number", "island_rank", "name", "pass_or_fail", "school", "stream", "student_status" };

    public static boolean hasCSVFormat(MultipartFile file) {

        if (!TYPE.equals(file.getContentType())) {
            return false;
        }

        return true;
    }

    public static Map<List<ALResults>, List<ALStudentResult>> csvToALResults(InputStream is, ALSubjectRepository alSubjectRepository) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<ALResults> alResults = new ArrayList<ALResults>();
            List<ALStudentResult> alStudentResults = new ArrayList<ALStudentResult>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                ALResults alResult = new ALResults(
                        csvRecord.get("district"),
                        csvRecord.get("district_rank"),
                        csvRecord.get("index_number"),
                        csvRecord.get("island_rank"),
                        csvRecord.get("name"),
                        csvRecord.get("pass_or_fail"),
                        csvRecord.get("school"),
                        csvRecord.get("stream"),
                        csvRecord.get("student_status"),
                        csvRecord.get("zscore")
                );

                alResults.add(alResult);
//                Map<String, String> subjectGrades = new HashMap<>();
//                Iterator<Map.Entry<String, String>> iterator = subjectGrades.entrySet().iterator();
//                for(int i = 1; i < 53; i++){
//                    if(csvRecord.get(String.valueOf(i)) != null){
//                        subjectGrades.put(String.valueOf(i), csvRecord.get(String.valueOf(i)));
//                        ALStudentResult alStudentResult1 = new ALStudentResult(
//                                alResult,
//                                alSubjectRepository.getById(i),
//                                csvRecord.get(String.valueOf(i))
//                        );
//                        alStudentResults.add(alStudentResult1);
//                    }
//                }
                ALStudentResult alStudentResult1 = new ALStudentResult(
                        alResult,
                        alSubjectRepository.getById(Integer.parseInt(csvRecord.get("first_subject"))),
                        csvRecord.get("first_subject_grade")
                );
                alStudentResults.add(alStudentResult1);

                ALStudentResult alStudentResult2 = new ALStudentResult(
                        alResult,
                        alSubjectRepository.getById(Integer.parseInt(csvRecord.get("second_subject"))),
                        csvRecord.get("second_subject_grade")
                );
                alStudentResults.add(alStudentResult2);

                ALStudentResult alStudentResult3 = new ALStudentResult(
                        alResult,
                        alSubjectRepository.getById(Integer.parseInt(csvRecord.get("third_subject"))),
                        csvRecord.get("third_subject_grade")
                );
                alStudentResults.add(alStudentResult3);

                ALStudentResult alStudentResult4 = new ALStudentResult(
                        alResult,
                        alSubjectRepository.getById(54),
                        csvRecord.get("general_IT")
                );
                alStudentResults.add(alStudentResult4);

                ALStudentResult alStudentResult5 = new ALStudentResult(
                        alResult,
                        alSubjectRepository.getById(55),
                        csvRecord.get("general_english")
                );
                alStudentResults.add(alStudentResult5);

                ALStudentResult alStudentResult6 = new ALStudentResult(
                        alResult,
                        alSubjectRepository.getById(56),
                        csvRecord.get("common_general_test")
                );
                alStudentResults.add(alStudentResult6);
            }
            Map<List<ALResults>, List<ALStudentResult>> listPair = new HashMap<>();
            listPair.put(alResults, alStudentResults);
            return listPair;
        } catch (IOException e) {
            throw new RuntimeException("failed to parse CSV file: " + e.getMessage());
        }
    }
}
