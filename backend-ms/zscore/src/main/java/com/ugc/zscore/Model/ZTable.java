package com.ugc.zscore.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;

@Entity
@Table(name = "z_score_table")
@Getter
@Setter
public class ZTable {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "district")
    private String district;

    @Column(name = "course")
    private String course;

    @Column(name = "uni")
    private String uni;

    @Column(name = "uni_code")
    private String uni_code;

    @Column(name = "zvalue")
    private String zvalue;

    public ZTable() {
    }

    public ZTable(Integer id,String district, String course, String uni, String uni_code, String zvalue) {
        this.id = id;
        this.district = district;
        this.course = course;
        this.uni = uni;
        this.uni_code = uni_code;
        this.zvalue = zvalue;
    }

//    public ZTable(Integer id, String district, String course, String uni, String uni_code, String zvalue) {
//        this.id = id;
//        this.district = district;
//        this.course = course;
//        this.uni = uni;
//        this.uni_code = uni_code;
//        this.zvalue = zvalue;
//    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
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

    public String getUni_code() {
        return uni_code;
    }

    public void setUni_code(String uni_code) {
        this.uni_code = uni_code;
    }

    public String getZvalue() {
        return zvalue;
    }

    public void setZvalue(String zvalue) {
        this.zvalue = zvalue;
    }

    @Override
    public String toString() {
        return "Member[id=" + id + ", district=" + district + ", course='" + course + ", uni='" + uni + ", uni_code='" + uni_code + ", zvalue='" + zvalue + "]";
    }
}
