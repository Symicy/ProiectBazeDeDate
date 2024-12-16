package com.example.backend.repo;

import com.example.backend.domain.Mentenanta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MentenantaRepo extends JpaRepository<Mentenanta, Long>
{
    Optional<Mentenanta> findMentenantaByIdMentenanta(Long id);
}
