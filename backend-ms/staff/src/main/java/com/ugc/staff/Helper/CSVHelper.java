package com.ugc.staff.Helper;

import com.ugc.staff.Model.ALevel.ALResults;
import com.ugc.staff.Model.ALevel.ALStudentResult;
import com.ugc.staff.Model.OLevel.OLResults;
import com.ugc.staff.Model.OLevel.OLStudentResult;
import com.ugc.staff.Repository.ALevel.ALSubjectRepository;
import com.ugc.staff.Repository.OLevel.OLSubjectRepository;
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


    public static Map<List<OLResults>, List<OLStudentResult>> csvToOLResults(InputStream is, OLSubjectRepository olSubjectRepository) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<OLResults> olResults = new ArrayList<OLResults>();
            List<OLStudentResult> olStudentResults = new ArrayList<OLStudentResult>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                OLResults olResult = new OLResults(
                        csvRecord.get("index_number"),
                        csvRecord.get("name"),
                        csvRecord.get("district"),
                        csvRecord.get("school"),
                        csvRecord.get("island_rank"),
                        csvRecord.get("pass_or_fail"),
                        csvRecord.get("student_status")
                );

                olResults.add(olResult);
//                Compulsory subjects
                OLStudentResult olStudentResult1 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(Integer.parseInt(csvRecord.get("religion"))),
                        csvRecord.get("religion_grade")
                );

                olStudentResults.add(olStudentResult1);

                OLStudentResult olStudentResult2 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(Integer.parseInt(csvRecord.get("language"))),
                        csvRecord.get("language_grade")
                );
                olStudentResults.add(olStudentResult2);

                OLStudentResult olStudentResult3 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(8),
                        csvRecord.get("english")
                );
                olStudentResults.add(olStudentResult3);

                OLStudentResult olStudentResult4 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(9),
                        csvRecord.get("history")
                );
                olStudentResults.add(olStudentResult4);

                OLStudentResult olStudentResult5 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(10),
                        csvRecord.get("science")
                );
                olStudentResults.add(olStudentResult5);

                OLStudentResult olStudentResult6 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(11),
                        csvRecord.get("mathematics")
                );
                olStudentResults.add(olStudentResult6);

//                Basket subjects
                OLStudentResult olStudentResult7 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(Integer.parseInt(csvRecord.get("b1"))),
                        csvRecord.get("b1_grade")
                );
                olStudentResults.add(olStudentResult7);

                OLStudentResult olStudentResult8 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(Integer.parseInt(csvRecord.get("b2"))),
                        csvRecord.get("b2_grade")
                );
                olStudentResults.add(olStudentResult8);

                OLStudentResult olStudentResult9 = new OLStudentResult(
                        olResult,
                        olSubjectRepository.getById(Integer.parseInt(csvRecord.get("b3"))),
                        csvRecord.get("b3_grade")
                );
                olStudentResults.add(olStudentResult9);


            }
            Map<List<OLResults>, List<OLStudentResult>> listPair = new HashMap<>();
            listPair.put(olResults, olStudentResults);
            return listPair;
        } catch (IOException e) {
            throw new RuntimeException("failed to parse CSV file: " + e.getMessage());
        }
    }

}
