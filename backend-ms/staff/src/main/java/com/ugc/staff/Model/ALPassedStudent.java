package com.ugc.staff.Model;

import javax.persistence.*;

@Entity
@Table(name = "ALPassedStudent")
public class ALPassedStudent {
    @Id
    private Long id;
    @Column(nullable = false)
    private String name;

    public ALPassedStudent(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public ALPassedStudent(String name) {
        this.name = name;
    }

    public ALPassedStudent() {

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
