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

public class ZscoreTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long z_id;

    @Column(name = "District")
    private String district;

    @Column(name = "uni_code")
    private String uni_code;

    @Column(name = "zvalue")
    private float zvalue;

    public ZscoreTable(Long z_id, String district, String uni_code, float zvalue) {
        this.z_id = z_id;
        this.district = district;
        this.uni_code = uni_code;
        this.zvalue = zvalue;
    }

    public ZscoreTable() {

    }

    public Long getZ_id() {
        return z_id;
    }

    public void setZ_id(Long z_id) {
        this.z_id = z_id;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getUni_code() {
        return uni_code;
    }

    public void setUni_code(String uni_code) {
        this.uni_code = uni_code;
    }

    public float getZvalue() {
        return zvalue;
    }

    public void setZvalue(float zvalue) {
        this.zvalue = zvalue;
    }

    @Override
    public String toString() {
        return "ZscoreTable{" +
                "z_id=" + z_id +
                ", district='" + district + '\'' +
                ", uni_code='" + uni_code + '\'' +
                ", zvalue=" + zvalue +
                '}';
    }
}
