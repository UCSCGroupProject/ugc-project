package com.ugc.university.payload.response.universityDetails;

import com.ugc.university.model.course.Course;
import com.ugc.university.model.course.Unicode;
import com.ugc.university.payload.response.universityDetails.supports.UniProfileCourseDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class UniProfileResponse {
    private String username;
    private String name;
    private String email;
    private String address;
    private String islandRank;
    private String worldRank;
    private String phone;
    private List<UniProfileCourseDetail> uniProfileCourseDetailList;
}
