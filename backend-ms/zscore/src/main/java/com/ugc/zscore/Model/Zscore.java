package com.ugc.zscore.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;

@Entity
@Table(name = "zscore")
@Getter
@Setter
public class Zscore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "age")
    private Integer age;

    public Zscore() {

    }

    public Zscore(String first_name, String  last_name, int age) {
//        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

//    public long getId() {
//        return id;
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }

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

    public int getage(){
        return age;
    }

    public void setage(int age){
        this.age = age;
    }

    @Override
    public String toString() {
        return "Member [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", age=" + age + "]";
    }
}
