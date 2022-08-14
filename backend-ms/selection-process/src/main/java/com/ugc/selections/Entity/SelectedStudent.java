package com.ugc.selections.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(
        name = "selectedStudents",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "indexNumber")
        }
)
@Getter
@Setter
@NoArgsConstructor
public class SelectedStudent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    @Column(name = "indexNumber")
    private String indexNumber;
}
