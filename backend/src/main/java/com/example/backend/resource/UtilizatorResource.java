package com.example.backend.resource;

import com.example.backend.domain.Utilizator;
import com.example.backend.service.UtilizatorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/utilizatori")
@RequiredArgsConstructor
public class UtilizatorResource {
    private final UtilizatorService utilizatorService;

    @PostMapping("/inregistrare")
    public ResponseEntity<Utilizator> createUtilizator(@RequestBody Utilizator utilizator) {

            return ResponseEntity.created(URI.create("/utilizatori/utilizatorID")).body(utilizatorService.createUtilizator(utilizator));

    }

    @PostMapping("/autentificare")
    public ResponseEntity<Utilizator> loginUtilizator(@RequestBody Utilizator utilizator) {
        try{
            Utilizator foundUtilizator = utilizatorService.loginUtilizator(utilizator);
            return ResponseEntity.ok().body(foundUtilizator);
        }
        catch (RuntimeException e){
            return ResponseEntity.status(401).body(null);
        }
    }
}
