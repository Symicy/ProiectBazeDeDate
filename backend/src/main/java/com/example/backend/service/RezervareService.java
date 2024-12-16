package com.example.backend.service;

import com.example.backend.domain.Rezervare;
import com.example.backend.repo.RezervareRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class RezervareService {
    private final RezervareRepo rezervareRepo;

    public Rezervare getRezervareById(Long id) {
        return rezervareRepo.findRezervareByIdRezervare(id).orElseThrow(() -> new RuntimeException("Rezervarea nu a fost gasita"));
    }

    public List<Rezervare> getAllRezervari() {
        return rezervareRepo.findAll();
    }

    public Rezervare createRezervare(Rezervare rezervare) {
        return rezervareRepo.save(rezervare);
    }

    public Rezervare updateRezervare(Rezervare rezervare) {
        return rezervareRepo.save(rezervare);
    }

    public void deleteRezervare(Long id) {
        rezervareRepo.deleteById(id);
    }
}
