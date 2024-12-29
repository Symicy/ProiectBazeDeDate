package com.example.backend.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity class representing a Utilizator (User).
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // exclude null fields
@Table(name = "utilizator")
public class Utilizator {

    /**
     * Unique identifier for the user.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUtilizator", unique = true, updatable = false)
    private Long idUtilizator;

    /**
     * Last name of the user.
     */
    @Column(name = "nume", length = 100, nullable = false)
    private String nume;

    /**
     * First name of the user.
     */
    @Column(name = "prenume", length = 100, nullable = false)
    private String prenume;

    /**
     * Email of the user.
     */
    @Column(name = "email", length = 100, unique = true, nullable = false)
    private String email;

    /**
     * Phone number of the user.
     */
    @Column(name = "telefon", length = 20, nullable = false)
    private String telefon;

    /**
     * Password of the user.
     */
    @Column(name = "parola", length = 100, nullable = false)
    private String parola;

    /**
     * Type of the user (e.g., client or admin).
     */
    @Column(name = "tip", length = 50, nullable = false)
    private String tip;
}
