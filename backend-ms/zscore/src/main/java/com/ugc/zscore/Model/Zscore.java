package com.ugc.zscore.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;

@Entity
@Table(name = "test")
@Getter
@Setter
public class Zscore {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "course")
    private String course;

    @Column(name = "uni")
    private String uni;

    @Column(name = "age")
    private String age;

    public Zscore() {

    }

    public Zscore(String id, String first_name, String last_name, String course, String uni, String age) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.course = course;
        this.uni = uni;
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getfirst_name() {
        return first_name;
    }

    public void setfirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getlast_name() {
        return last_name;
    }

    public void setlast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getUni() {
        return uni;
    }

    public void setUni(String uni) {
        this.uni = uni;
    }

    public String getage(){
        return age;
    }

    public void setage(String age){
        this.age = age;
    }

    @Override
    public String toString() {
        return "Member [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", age=" + age + "]";
    }
}
