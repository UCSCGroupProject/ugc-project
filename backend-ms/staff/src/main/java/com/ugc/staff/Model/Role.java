package com.ugc.staff.Model;

import com.ugc.staff.Model.Enums.E_Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
@Getter
@Setter
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 100)
    private E_Role name;


    @ManyToMany(mappedBy = "roles")
    Set<Staff> staff;
//    @OneToMany(mappedBy="role")
//    private Set<Staff> staff;
    public Role(E_Role name){
        this.name = name;
    }
}
