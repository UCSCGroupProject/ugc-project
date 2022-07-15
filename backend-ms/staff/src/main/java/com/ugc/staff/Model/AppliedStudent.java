package com.ugc.staff.Model;

import javax.persistence.*;

@Entity
@Table(name = "AppliedStudent")
public class AppliedStudent {
    @Id
    private Long id;
    @Column(nullable = false)
    private String name;

    public AppliedStudent(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public AppliedStudent(String name) {
        this.name = name;
    }

    public AppliedStudent() {

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
