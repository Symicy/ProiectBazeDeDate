package com.example.backend.service;

import com.example.backend.domain.Vehicul;
import com.example.backend.repo.VehiculRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class VehiculService {
    private final VehiculRepo vehiculRepo;

    public Vehicul getVehiculById(Long id) {
        return vehiculRepo.findVehiculByIdVehicul(id).orElseThrow(() -> new RuntimeException("Vehiculul nu a fost gasit"));
    }

    public Page<Vehicul> getAllVehicule(int page, int size) {
        return vehiculRepo.findAll(PageRequest.of(page, size, Sort.by("marca")));
    }

    public Vehicul createVehicul(Vehicul vehicul) {
        return vehiculRepo.save(vehicul);
    }

    public Vehicul updateVehicul(Vehicul vehicul) {
        return vehiculRepo.save(vehicul);
    }

    public void deleteVehicul(Long id) {
        vehiculRepo.deleteById(id);
    }

}
