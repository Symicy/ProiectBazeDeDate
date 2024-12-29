package com.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

/**
 * Entity class representing a Vehicul (Vehicle).
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // exclude null fields
@Table(name = "vehicul")
public class Vehicul {

    /**
     * Unique identifier for the vehicle.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idVehicul", unique = true, updatable = false)
    private Long idVehicul;

    /**
     * Rental cost of the vehicle.
     */
    @Column(name = "costInchiriere", nullable = false)
    private double costInchiriere;

    /**
     * Manufacturer of the vehicle.
     */
    @Column(name = "producator", length = 100, nullable = false)
    private String producator;

    /**
     * Model of the vehicle.
     */
    @Column(name = "model", length = 100, nullable = false)
    private String model;

    /**
     * Manufacturing date of the vehicle.
     */
    @Column(name = "dataFabricatie", nullable = false)
    private LocalDate dataFabricatie;

    /**
     * Status of the vehicle (e.g., available, rented, under maintenance).
     */
    @Column(name = "status", length = 100, nullable = false)
    private String status;

    /**
     * Date of the last maintenance of the vehicle.
     */
    @OneToMany(mappedBy = "vehicul", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Mentenanta> mentenanta;

    /**
     * Mileage of the vehicle.
     */
    @Column(name = "kilometraj", length = 100, nullable = false)
    private String kilometraj;

    /**
     * License plate number of the vehicle.
     */
    @Column(name = "numarInmatriculare", length = 50, nullable = false)
    private String numarInmatriculare;

    /**
     * URL of the photo of the vehicle.
     */
    @Column(name = "photoURL")
    private String photoURL;
}
