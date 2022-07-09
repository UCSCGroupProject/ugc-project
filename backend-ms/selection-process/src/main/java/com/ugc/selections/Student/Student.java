package com.ugc.selections.Student;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Student")
public class Student {
    @Id
    private Long id;
    @Column(nullable = false)
    private String name;

    public Student(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Student(String name) {
        this.name = name;
    }

    public Student() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
