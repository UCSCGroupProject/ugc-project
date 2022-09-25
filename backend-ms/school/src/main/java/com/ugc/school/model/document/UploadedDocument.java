package com.ugc.school.model.document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "uploaded_document")
@Getter
@Setter
@NoArgsConstructor
public class UploadedDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer documentId;

    private Integer fileId;

    public UploadedDocument(Integer documentId, Integer fileId) {
        this.documentId = documentId;
        this.fileId = fileId;
    }
}
