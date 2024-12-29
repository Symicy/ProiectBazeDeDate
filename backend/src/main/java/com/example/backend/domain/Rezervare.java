package com.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * Entity class representing a Rezervare (Reservation).
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // exclude null fields
@Table(name = "rezervare")
public class Rezervare {

    /**
     * Unique identifier for the reservation.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idRezervare", unique = true, updatable = false)
    private Long idRezervare;

    /**
     * Identifier of the associated client.
     */
    @ManyToOne
    @JoinColumn(name = "idUtilizator", nullable = false)
    private Utilizator utilizator;

    /**
     * Identifier of the associated vehicle.
     */
    @ManyToOne
    @JoinColumn(name = "idVehicul", nullable = false)
    private Vehicul vehicul;

    /**
     * Identifier of the associated service package.
     */
    @ManyToOne
    @JoinColumn(name = "idPachet", nullable = false)
    private PachetServicii pachet;

    /**
     * Status of the reservation.
     */
    @Column(name = "status", length = 50, nullable = false)
    private String status;

    /**
     * Total cost of the reservation.
     */
    @Column(name = "costTotal", nullable = false)
    private double costTotal;

    /**
     * Start date of the reservation.
     */
    @Column(name = "dataInceput", nullable = false)
    private LocalDate dataInceput;

    /**
     * End date of the reservation.
     */
    @Column(name = "dataIncheiere", nullable = false)
    private LocalDate dataIncheiere;
}
