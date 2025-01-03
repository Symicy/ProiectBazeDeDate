package com.example.backend.service;

import com.example.backend.domain.Mentenanta;
import com.example.backend.domain.Vehicul;
import com.example.backend.repo.MentenantaRepo;
import com.example.backend.repo.VehiculRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class MentenantaService {
    private final MentenantaRepo mentenantaRepo;
    private final VehiculRepo vehiculRepo;

    public Mentenanta getMentenantaById(Long id) {
        return mentenantaRepo.findMentenantaByIdMentenanta(id).orElseThrow(() -> new RuntimeException("Mentenanta nu a fost gasita"));
    }

    public List<Mentenanta> getAllMentenante() {
        return mentenantaRepo.findAll();
    }

    public void deleteMentenanta(Long id) {
        mentenantaRepo.deleteById(id);
    }

    public Mentenanta createMentenanta(Mentenanta mentenanta) {
        return mentenantaRepo.save(mentenanta);
    }

    public Mentenanta updateMentenanta(Mentenanta mentenanta) {
        return mentenantaRepo.save(mentenanta);
    }

    public Vehicul findVehiculById(Long id) {
        return vehiculRepo.findById(id).orElseThrow(() -> new RuntimeException("Vehiculul nu a fost gasit"));
    }
}
