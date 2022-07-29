package com.ugc.zscore.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "district")
@Getter
@Setter
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotBlank
    @Size(max = 50)
    @Column(name = "district_name")
    private String districtName;
}
