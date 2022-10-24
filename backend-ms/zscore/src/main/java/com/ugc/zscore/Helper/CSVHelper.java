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

import com.ugc.zscore.Model.ZTable;
import com.ugc.zscore.Model.Zscore;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.csv.QuoteMode;
import org.springframework.web.multipart.MultipartFile;


public class CSVHelper {
    public static String TYPE = "text/csv";
    static String[] HEADERs = { "Id", "first_name", "last_name", "course", "uni", "age" };
//    static String[] HEADERs = { "id", "district", "course", "uni", "uni_code", "zvalue" };
    public static boolean hasCSVFormat(MultipartFile file) {
        if (TYPE.equals(file.getContentType())
                || file.getContentType().equals("application/vnd.ms-excel")) {
            return true;
        }

        return false;
    }

    // for test table
    public static List<Zscore> csvToTutorials(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<Zscore> developerTutorialList = new ArrayList<>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                Zscore developerTutorial = new Zscore(
                        csvRecord.get("Id"),
                        csvRecord.get("first_name"),
                        csvRecord.get("last_name"),
                        csvRecord.get("course"),
                        csvRecord.get("uni"),
                        csvRecord.get("age")
                );

                developerTutorialList.add(developerTutorial);
            }

            return developerTutorialList;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }

//    public static List<ZTable> csvToZtable(InputStream is) {
//        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
//             CSVParser csvParser = new CSVParser(fileReader,
//                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {
//
//            List<ZTable> developerTutorialList = new ArrayList<>();
//
//            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
//
//            for (CSVRecord csvRecord : csvRecords) {
//                ZTable developerTutorial = new ZTable(
//                        Integer.parseInt(csvRecord.get("id")),
//                        csvRecord.get("district"),
//                        csvRecord.get("course"),
//                        csvRecord.get("uni"),
//                        csvRecord.get("uni_code"),
//                        csvRecord.get("zvalue")
//                );
//
//                developerTutorialList.add(developerTutorial);
//            }
//
//            return developerTutorialList;
//        } catch (IOException e) {
//            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
//        }
//    }


//  for downloading
    public static ByteArrayInputStream tutorialsToCSV(List<Zscore> developerTutorialList) {
        final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
            for (Zscore developerTutorial : developerTutorialList) {
                List<String> data = Arrays.asList(
//                        String.valueOf(developerTutorial.getId()),
                        developerTutorial.getfirst_name(),
                        developerTutorial.getlast_name(),
                        String.valueOf(developerTutorial.getage())
                );

                csvPrinter.printRecord(data);
            }

            csvPrinter.flush();
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
        }
    }

//    public static ByteArrayInputStream tutorialsToCSV(List<ZTable> developerTutorialList) {
//        final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);
//
//        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
//             CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
//            for (ZTable developerTutorial : developerTutorialList) {
//                List<String> data = Arrays.asList(
//                        String.valueOf(developerTutorial.getId()),
//                        developerTutorial.getDistrict(),
//                        developerTutorial.getCourse(),
//                        developerTutorial.getUni(),
//                        developerTutorial.getUni_code(),
//                        developerTutorial.getZvalue()
//                );
//
//                csvPrinter.printRecord(data);
//            }
//
//            csvPrinter.flush();
//            return new ByteArrayInputStream(out.toByteArray());
//        } catch (IOException e) {
//            throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
//        }
//    }
}