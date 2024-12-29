package com.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * Entity class representing a Plata (Payment).
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // exclude null fields
@Table(name = "plata")
public class Plata {

    /**
     * Unique identifier for the payment.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPlata", unique = true, updatable = false)
    private Long idPlata;

    /**
     * Identifier of the associated reservation.
     */
    @OneToOne
    @JoinColumn(name = "idRezervare", nullable = false)
    private Rezervare rezervare;

    /**
     * Status of the payment.
     */
    @Column(name = "status", length = 50, nullable = false)
    private String status;

    /**
     * Date of the payment.
     */
    @Column(name = "dataPlata", nullable = false)
    private LocalDate dataPlata;

    /**
     * Amount of the payment.
     */
    @Column(name = "suma", nullable = false)
    private double suma;

    /**
     * Payment method.
     */
    @Column(name = "metodaPlata", length = 50, nullable = false)
    private String metodaPlata;
}
