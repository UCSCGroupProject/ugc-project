package com.ugc.selections.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(
        name = "Students",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "indexNumber")
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank
    @Size(max = 100)
    @Column(name = "indexNumber")
    private String indexNumber;

    @NotBlank
    @Size(max = 100)
    @Column(name = "selectedCourse")
    private String selectedCourse;

    public Student(String indexNumber, String selectedCourse) {
        this.indexNumber = indexNumber;
        this.selectedCourse = selectedCourse;
    }
}
