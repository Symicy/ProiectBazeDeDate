package com.example.backend.resource;

import com.example.backend.domain.PachetServicii;
import com.example.backend.service.PachetServiciiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/pachetServicii")
@RequiredArgsConstructor
public class PachetServiciiResource
{
    private final PachetServiciiService pachetServiciiService;

    @PostMapping
    public ResponseEntity<PachetServicii> createPachetServicii(@RequestBody PachetServicii pachetServicii) {
        return ResponseEntity.created(URI.create("/pachetServicii/pachetServiciiID")).body(pachetServiciiService.createPachetServicii(pachetServicii));
    }

    @GetMapping
    public ResponseEntity<List<PachetServicii>> getPachetServicii() {
        return ResponseEntity.ok().body(pachetServiciiService.getAllPachetServicii());
    }

    @GetMapping("/{idPachetServicii}")
    public ResponseEntity<PachetServicii> getPachetServiciiById(@PathVariable(value = "idPachetServicii") Long id) {
        return ResponseEntity.ok().body(pachetServiciiService.getPachetServiciiById(id));
    }

    @DeleteMapping("/{idPachetServicii}")
    public ResponseEntity<Void> deletePachetServicii(@PathVariable(value = "idPachetServicii") Long id) {
        pachetServiciiService.deletePachetServicii(id);
        return ResponseEntity.noContent().build();
    }


}
