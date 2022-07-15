package com.ugc.staff.Model;

import javax.persistence.*;

@Entity
@Table(name = "ATPassedStudent")
public class ATPassedStudent {
    @Id
    private Long id;
    @Column(nullable = false)
    private String name;

    public ATPassedStudent(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public ATPassedStudent(String name) {
        this.name = name;
    }

    public ATPassedStudent() {

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
