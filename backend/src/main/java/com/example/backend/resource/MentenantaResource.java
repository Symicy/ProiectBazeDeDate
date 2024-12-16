package com.example.backend.resource;

import com.example.backend.domain.Mentenanta;
import com.example.backend.service.MentenantaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/mentenante")
@RequiredArgsConstructor
public class MentenantaResource {
    private final MentenantaService mentenantaService;

    @PostMapping
    public ResponseEntity<Mentenanta> createMentenanta(@RequestBody Mentenanta mentenanta) {
        return ResponseEntity.created(URI.create("/mentenante/mentenantaID")).body(mentenantaService.createMentenanta(mentenanta));
    }

    @GetMapping
    public ResponseEntity<List<Mentenanta>> getMentenante() {
        return ResponseEntity.ok().body(mentenantaService.getAllMentenante());
    }

    @DeleteMapping("/{idMentenanta}")
    public ResponseEntity<Void> deleteMentenanta(@PathVariable(value = "idMentenanta") Long idMentenanta) {
        mentenantaService.deleteMentenanta(idMentenanta);
        return ResponseEntity.noContent().build();
    }

}
