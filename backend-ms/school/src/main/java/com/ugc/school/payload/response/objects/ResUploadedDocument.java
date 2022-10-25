package com.ugc.school.payload.response.objects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResUploadedDocument {
    public Long schoolId;
    public String schoolName;
    public String schoolUsername;
    public String districtName;

    public Integer documentId;
    public String status;

    public Integer fileId;
}
