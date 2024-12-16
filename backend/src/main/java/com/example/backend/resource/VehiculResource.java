package com.example.backend.resource;

import com.example.backend.domain.Vehicul;
import com.example.backend.service.VehiculService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/vehicule")
@RequiredArgsConstructor
public class VehiculResource {
    private final VehiculService vehiculService;

    @PostMapping
    public ResponseEntity<Vehicul> createVehicul(@RequestBody Vehicul vehicul) {
        return ResponseEntity.created(URI.create("/vehicule/vehiculID")).body(vehiculService.createVehicul(vehicul));
    }

    @GetMapping
    public ResponseEntity<Page<Vehicul>> getVehicule(@RequestParam(value = "page", defaultValue = "0") int page,
                                                    @RequestParam(value = "size", defaultValue = "10") int size) {
        return ResponseEntity.ok().body(vehiculService.getAllVehicule(page, size));
    }

    @GetMapping("/{idVehicul}")
    public ResponseEntity<Vehicul> getVehiculById(@PathVariable(value = "id") Long id) {
        return ResponseEntity.ok().body(vehiculService.getVehiculById(id));
    }

    @DeleteMapping("/{idVehicul}")
    public ResponseEntity<Void> deleteVehicul(@PathVariable(value = "id") Long id) {
        vehiculService.deleteVehicul(id);
        return ResponseEntity.noContent().build();
    }
}
