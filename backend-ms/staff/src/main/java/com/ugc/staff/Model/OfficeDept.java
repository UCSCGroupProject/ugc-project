package com.ugc.staff.Model;

import com.ugc.staff.Model.Enums.E_OfficeDept;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "office_dept")
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

    @ManyToMany(mappedBy = "officeDept")
    Set<Staff> staff;

    public OfficeDept(E_OfficeDept name){
        this.name = name;
    }
}
