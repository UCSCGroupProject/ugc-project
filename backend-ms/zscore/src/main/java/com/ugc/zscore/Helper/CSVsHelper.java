package com.ugc.zscore.Helper;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.ugc.university.payload.response.ResType;
import com.ugc.zscore.Model.ZTable;
import com.ugc.zscore.Model.Zscore;
import com.ugc.zscore.payload.response.PayloadResponse;
import com.ugc.zscore.payload.response.ZScoreResponse;
import com.ugc.zscore.payload.response.ZScoreTableResponse;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.csv.QuoteMode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;


public class CSVsHelper {
    public static String TYPE = "text/csv";
    static String[] HEADERs = { "id", "district", "course", "uni", "uni_code", "zvalue" };

    public static boolean hasCSVFormat(MultipartFile file) {
        if (TYPE.equals(file.getContentType())
                || file.getContentType().equals("application/vnd.ms-excel")) {
            return true;
        }

        return false;
    }

    public static List<ZTable> csvToTutorials(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<ZTable> developerTutorialList = new ArrayList<>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                ZTable developerTutorial = new ZTable(
//                        Integer.parseInt(csvRecord.get("Id")),
                        csvRecord.get("district"),
                        csvRecord.get("course"),
                        csvRecord.get("uni"),
                        csvRecord.get("uni_code"),
                        csvRecord.get("zvalue")
                );

                developerTutorialList.add(developerTutorial);
            }

            return developerTutorialList;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }

}
