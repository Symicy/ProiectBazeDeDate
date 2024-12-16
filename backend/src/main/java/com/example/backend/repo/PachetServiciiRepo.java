package com.example.backend.repo;

import com.example.backend.domain.PachetServicii;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PachetServiciiRepo extends JpaRepository<PachetServicii, Long>{

    Optional<PachetServicii> findPachetServiciiByIdPachet(Long id);
    Optional<PachetServicii> findPachetServiciiByNume(String nume);
}
