package com.ugc.university.model.course;

import com.ugc.university.model.University;
import com.ugc.university.model.UniversityDetails;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "course")
@Getter
@Setter
@NoArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String code;
    private Integer proposedIntakes;

    // Foreign key from Stream - Refer id column of the Steam table as stream_id
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "stream_id", referencedColumnName = "id")
    private Stream stream;

    // For the foreign key referenced from Unicode
    @OneToMany(mappedBy = "course")
    private List<Unicode> unicodes;

    public Course(String name, Stream stream, String code, Integer proposedIntakes) {
        this.name = name;
        this.code = code;
        this.proposedIntakes = proposedIntakes;
        this.stream = stream;
    }
}
