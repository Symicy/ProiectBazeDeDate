package com.example.backend.repo;

import com.example.backend.domain.Utilizator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UtilizatorRepo extends JpaRepository<Utilizator, Long>
{
    Optional<Utilizator> findUtilizatorByIdUtilizator(Long id);

    Optional<Utilizator> findUtilizatorByEmail(String email);

    Optional<Utilizator> findUtilizatorByNume(String username);
}
