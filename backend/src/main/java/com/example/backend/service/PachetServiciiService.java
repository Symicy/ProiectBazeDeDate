package com.example.backend.service;

import com.example.backend.domain.PachetServicii;
import com.example.backend.repo.PachetServiciiRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class PachetServiciiService {
    private final PachetServiciiRepo pachetServiciiRepo;

    public PachetServicii getPachetServiciiById(Long id) {
        return pachetServiciiRepo.findPachetServiciiByIdPachet(id).orElseThrow(() -> new RuntimeException("Pachetul de servicii nu a fost gasit"));
    }

    public PachetServicii getPachetServiciiByNume(String nume) {
        return pachetServiciiRepo.findPachetServiciiByNume(nume).orElseThrow(() -> new RuntimeException("Pachetul de servicii nu a fost gasit"));
    }

    public PachetServicii createPachetServicii(PachetServicii pachetServicii) {
        return pachetServiciiRepo.save(pachetServicii);
    }

    public PachetServicii updatePachetServicii(PachetServicii pachetServicii) {
        return pachetServiciiRepo.save(pachetServicii);
    }

    public void deletePachetServicii(Long id) {
        pachetServiciiRepo.deleteById(id);
    }
}
