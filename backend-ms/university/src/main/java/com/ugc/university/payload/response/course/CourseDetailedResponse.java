package com.ugc.university.payload.response.course;

import com.ugc.university.payload.response.objects.UnicodeRecord;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class CourseDetailedResponse {
    private String courseName;
    private List<UnicodeRecord> offeredUniversities;
}
