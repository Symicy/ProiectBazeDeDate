package com.example.backend.service;

import com.example.backend.domain.Utilizator;
import com.example.backend.repo.UtilizatorRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class UtilizatorService {
    private final UtilizatorRepo utilizatorRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Utilizator getUtilizatorById(Long id) {
        return utilizatorRepo.findUtilizatorByIdUtilizator(id).orElseThrow(() -> new RuntimeException("Utilizatorul nu a fost gasit"));
    }

    public Utilizator getUtilizatorByUsername(String username) {
        return utilizatorRepo.findUtilizatorByNume(username).orElseThrow(() -> new RuntimeException("Utilizatorul nu a fost gasit"));
    }

    public Utilizator loginUtilizator(Utilizator utilizator) {
        Utilizator foundUtilizator = utilizatorRepo.findUtilizatorByEmail(utilizator.getEmail())
                .orElseThrow(() -> new RuntimeException("Email invalid"));
        if (bCryptPasswordEncoder.matches(utilizator.getParola(), foundUtilizator.getParola())) {
            return foundUtilizator;
        } else {
            throw new RuntimeException("Parola invalida");
        }

    }

    public Utilizator createUtilizator(Utilizator utilizator) {
        if(utilizatorRepo.findUtilizatorByEmail(utilizator.getEmail()).isPresent()){
            throw new RuntimeException("Email-ul exista deja");
        }
        utilizator.setParola(bCryptPasswordEncoder.encode(utilizator.getParola()));
        return utilizatorRepo.save(utilizator);
    }

    public Utilizator updateUtilizator(Utilizator utilizator) {
        return utilizatorRepo.save(utilizator);
    }

    public void deleteUtilizator(Long id) {
        utilizatorRepo.deleteById(id);
    }
}
