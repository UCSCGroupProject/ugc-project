package com.ugc.school.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "keypair")
@Getter
@Setter
@NoArgsConstructor
public class Keypair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String privateKey;
    private String publicKey;

    // Foreign key from Student - Refer id column of the Student table as stu_id
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sch_id", referencedColumnName = "id")
    private School school;

    public Keypair(String privateKey, String publicKey, School school) {
        this.privateKey = privateKey;
        this.publicKey = publicKey;
        this.school = school;
        this.school.setKeypair(this);
    }
}
