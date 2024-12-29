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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;

import static com.example.backend.constant.Constant.PHOTO_DIR;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

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
        return vehiculRepo.findAll(PageRequest.of(page, size, Sort.by("producator")));
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

    public String uploadPhoto(Long id, MultipartFile file)
    {
        log.info("Uploading photo for vehicle with id: {}", id);
        Vehicul vehicul = getVehiculById(id);
        String photoURL = photoFunction.apply(id, file);
        vehicul.setPhotoURL(photoURL);
        vehiculRepo.save(vehicul);
        return photoURL;
    }

    /**
     * Function to get the file extension from the file name.
     */
    private final Function<String, String> fileExtension = fileName -> Optional.of(fileName)
            .filter(name -> name.contains("."))
            .map(name -> "." + name.substring(fileName.lastIndexOf(".") + 1))
            .orElse(".png");

    /**
     * BiFunction to handle the photo upload process.
     */
    private final BiFunction<Long, MultipartFile, String> photoFunction = (id, image) ->
    {
        String filename = id + fileExtension.apply(image.getOriginalFilename());
        try
        {
            Path fileStorageLocation = Paths.get(PHOTO_DIR).toAbsolutePath().normalize();
            if (!Files.exists(fileStorageLocation))
            {
                Files.createDirectories(fileStorageLocation);
            }
            Files.copy(image.getInputStream(), fileStorageLocation.resolve(filename), REPLACE_EXISTING);
            return ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/vehicule/image/" + filename).toUriString();
        }
        catch (Exception e)
        {
            log.error("Error uploading photo", e);
            throw new RuntimeException("Error uploading photo");
        }
    };

}
