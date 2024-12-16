package com.example.backend.repo;

import com.example.backend.domain.Plata;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlataRepo extends JpaRepository<Plata, Long>
{
    Optional<Plata> findPlataByIdPlata(Long id);
}
