package com.example.backend.resource;

import com.example.backend.domain.Vehicul;
import com.example.backend.service.VehiculService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static com.example.backend.constant.Constant.PHOTO_DIR;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

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
    public ResponseEntity<Vehicul> getVehiculById(@PathVariable(value = "idVehicul") Long id) {
        return ResponseEntity.ok().body(vehiculService.getVehiculById(id));
    }

    @DeleteMapping("/{idVehicul}")
    public ResponseEntity<Void> deleteVehicul(@PathVariable(value = "idVehicul") Long id) {
        vehiculService.deleteVehicul(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/photo")
    public ResponseEntity<String> uploadPhoto(@RequestParam("id") Long id,
                                              @RequestParam("file") MultipartFile file)
    {
        return ResponseEntity.ok().body(vehiculService.uploadPhoto(id, file));
    }

    @GetMapping(path = "/image/{fileName}", produces = {IMAGE_PNG_VALUE, IMAGE_JPEG_VALUE})
    public byte[] getPhoto(@PathVariable("fileName") String filename) throws Exception {
        Path filePath = Paths.get(PHOTO_DIR + filename);
        if (Files.exists(filePath)) {
            return Files.readAllBytes(filePath);
        } else {
            log.error("File not found: {}", filename);
            throw new RuntimeException("File not found");
        }
    }
}
