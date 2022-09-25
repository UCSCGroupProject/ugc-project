package com.ugc.selections.Payload.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.javatuples.Triplet;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OLUnicodeRequest {
//    Triplet<Unicode, subject, requirement of result>
    List<Triplet<String, String, String>> unicodeList;
}
