package com.ugc.zscore.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "zscore")
@Getter
@Setter
public class Zscore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
