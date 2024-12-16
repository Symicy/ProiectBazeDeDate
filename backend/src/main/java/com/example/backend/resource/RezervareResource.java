package com.example.backend.resource;

import com.example.backend.domain.Rezervare;
import com.example.backend.service.RezervareService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/rezervari")
@RequiredArgsConstructor
public class RezervareResource {
    private final RezervareService rezervareService;

    @PostMapping
    public ResponseEntity<Rezervare> createRezervare(@RequestBody Rezervare rezervare) {
        return ResponseEntity.created(URI.create("/rezervari/rezervareID")).body(rezervareService.createRezervare(rezervare));
    }

    @GetMapping
    public ResponseEntity<List<Rezervare>> getRezervari() {
        return ResponseEntity.ok().body(rezervareService.getAllRezervari());
    }


}
