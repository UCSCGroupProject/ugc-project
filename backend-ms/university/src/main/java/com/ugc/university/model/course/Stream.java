package com.ugc.university.model.course;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

    public Stream(String streamName) {
        this.streamName = streamName;
    }
}
