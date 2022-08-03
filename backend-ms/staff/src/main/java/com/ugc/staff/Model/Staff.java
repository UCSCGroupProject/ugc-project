package com.ugc.staff.Model;

import com.ugc.staff.Model.Enums.E_OfficeDept;
import com.ugc.staff.Model.Enums.E_Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Entity
@Table(name = "staff", uniqueConstraints = { @UniqueConstraint(columnNames = "email")})
@Getter
@Setter
@NoArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    @Column(name = "username")
    private String username;

    @NotBlank
    @Size(max = 100)
    @Column(name = "email")
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "staff_role",
//            joinColumns = @JoinColumn(name = "staff_id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id"))
//    private Set<Role> roles = new HashSet<>();

//    @NotBlank
//    @Size(max = 120)
//    private E_Role role;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "staff_role",
           joinColumns = @JoinColumn(name = "staff_id"),
           inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> role = new HashSet<>();;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "staff_office_dept",
            joinColumns = @JoinColumn(name = "staff_id"),
            inverseJoinColumns = @JoinColumn(name = "office_dept_id"))
    private Set<OfficeDept> officeDept = new HashSet<>();;


//    @NotBlank
//    @Size(max = 120)
//    private E_OfficeDept officeDept;

    public Staff(String username, String email, String password, Set<Role> role, Set<OfficeDept> officeDept) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.officeDept = officeDept;
    }


}
