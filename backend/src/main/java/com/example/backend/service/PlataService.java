package com.example.backend.service;

import com.example.backend.domain.Plata;
import com.example.backend.repo.PlataRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class PlataService {
    private final PlataRepo plataRepo;

    public Plata getPlataById(Long id) {
        return plataRepo.findPlataByIdPlata(id).orElseThrow(() -> new RuntimeException("Plata nu a fost gasita"));
    }

    public List<Plata> getAllPlati() {
        return plataRepo.findAll();
    }

    public Plata createPlata(Plata plata) {
        return plataRepo.save(plata);
    }

    public void deletePlata(Long id) {
        plataRepo.deleteById(id);
    }

}
