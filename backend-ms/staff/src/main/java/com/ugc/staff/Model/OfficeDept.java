package com.ugc.staff.Model;

import com.ugc.staff.Model.Enums.E_OfficeDept;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "officeDept")
@Getter
@Setter
@NoArgsConstructor
public class OfficeDept {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 100)
    private E_OfficeDept name;

    public OfficeDept(E_OfficeDept name){
        this.name = name;
    }
}
