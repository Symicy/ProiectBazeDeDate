package com.example.backend.resource;

import com.example.backend.domain.PachetServicii;
import com.example.backend.domain.Rezervare;
import com.example.backend.domain.Utilizator;
import com.example.backend.domain.Vehicul;
import com.example.backend.service.PachetServiciiService;
import com.example.backend.service.RezervareService;
import com.example.backend.service.UtilizatorService;
import com.example.backend.service.VehiculService;
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
    private final UtilizatorService utilizatorService;
    private final PachetServiciiService pachetServiciiService;
    private final VehiculService vehiculService;

    @PostMapping
    public ResponseEntity<Rezervare> createRezervare(@RequestBody Rezervare rezervare, @RequestParam Long idUtilizator,
                                                     @RequestParam Long idPachetServicii, @RequestParam Long idVehicul) {
        Utilizator utilizator = utilizatorService.getUtilizatorById(idUtilizator);
        Vehicul vehicul = vehiculService.getVehiculById(idVehicul);
        PachetServicii pachetServicii = pachetServiciiService.getPachetServiciiById(idPachetServicii);

        rezervare.setUtilizator(utilizator);
        rezervare.setVehicul(vehicul);
        rezervare.setPachet(pachetServicii);

        return ResponseEntity.created(URI.create("/rezervari/rezervareID")).body(rezervareService.createRezervare(rezervare));
    }

    @GetMapping
    public ResponseEntity<List<Rezervare>> getRezervari() {
        return ResponseEntity.ok().body(rezervareService.getAllRezervari());
    }

    @GetMapping("/utilizator/{idUtilizator}")
    public ResponseEntity<List<Rezervare>> getRezervariByUtilizator(@PathVariable Long idUtilizator) {
        List<Rezervare> rezervari = rezervareService.getRezervariByUtilizatorId(idUtilizator);
        return ResponseEntity.ok().body(rezervari);
    }

}
