package com.example.backend.repo;

import com.example.backend.domain.Rezervare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RezervareRepo extends JpaRepository<Rezervare, Long>
{
    Optional<Rezervare> findRezervareByIdRezervare(Long id);
}
