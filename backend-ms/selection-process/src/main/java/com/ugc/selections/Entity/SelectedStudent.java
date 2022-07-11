package com.ugc.selections.Entity;

import javax.persistence.*;

@Entity
@Table(name = "SelectedStudent")
public class SelectedStudent {
    @Id
    private Long id;
    @Column(nullable = false)
    private String name;

    public SelectedStudent(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SelectedStudent(String name) {
        this.name = name;
    }

    public SelectedStudent() {

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
