package com.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity class representing a PachetServicii (Service Package).
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // exclude null fields
@Table(name = "pachet_servicii")
public class PachetServicii {

    /**
     * Unique identifier for the service package.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPachet", unique = true, updatable = false)
    private Long idPachet;

    /**
     * Cost of the service package.
     */
    @Column(name = "costPachet", nullable = false)
    private double costPachet;

    /**
     * Name of the service package.
     */
    @Column(name = "nume", length = 50, nullable = false)
    private String nume;

    /**
     * Description of the service package.
     */
    @Column(name = "descriere", length = 500, nullable = false)
    private String descriere;
}
