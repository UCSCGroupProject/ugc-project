package com.ugc.university.model.course;

import com.ugc.university.model.UniversityDetails;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "stream")
@Getter
@Setter
@NoArgsConstructor
public class Stream {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String streamName;

    // For the foreign key referenced from Course
    @OneToMany(mappedBy = "stream")
    private Set<Course> courses;

    public Stream(String streamName) {
        this.streamName = streamName;
    }
}
