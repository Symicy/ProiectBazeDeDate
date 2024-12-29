package com.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * Entity class representing a Mentenanta (Maintenance).
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // exclude null fields
@Table(name = "mentenanta")
public class Mentenanta {

    /**
     * Unique identifier for the maintenance record.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMentenanta", unique = true, updatable = false, nullable = false)
    private Long idMentenanta;

    /**
     * Identifier of the associated vehicle.
     */
    @ManyToOne
    @JoinColumn(name = "idVehicul", referencedColumnName = "idVehicul")
    @JsonBackReference
    private Vehicul vehicul;

    /**
     * Date of the maintenance.
     */
    @Column(name = "data", nullable = false)
    private LocalDate data;

    /**
     * Cost of the maintenance.
     */
    @Column(name = "cost", nullable = false)
    private double cost;
}
