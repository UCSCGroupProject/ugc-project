package com.ugc.filemanager.payload.response.objects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResFile {
    private Integer id;
    private String fileName;
//    private String downloadURL;
//    private String fileType;
//    private long fileSize;
}
