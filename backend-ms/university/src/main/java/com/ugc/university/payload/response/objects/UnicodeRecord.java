package com.ugc.university.payload.response.objects;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UnicodeRecord {
    public String universityName;
    public String universityUsername;
    public String unicode;
}
