package com.example.zumba_training_board.controller;

import com.example.zumba_training_board.model.ZumbaTraining;
import com.example.zumba_training_board.repository.ZumbaTrainingRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") // lubame Angulari
@RestController
@RequestMapping("/api/zumba-trainings")
public class ZumbaTrainingController {

    private final ZumbaTrainingRepository zumbaTrainingRepository;

    public ZumbaTrainingController(ZumbaTrainingRepository zumbaTrainingRepository) {
        this.zumbaTrainingRepository = zumbaTrainingRepository;
    }

    @GetMapping
    public List<ZumbaTraining> getAllZumbaTrainings() {
        return zumbaTrainingRepository.findAll();
    }

    @PostMapping
    public ZumbaTraining createZumbaTraining(@RequestBody ZumbaTraining zumbaTraining) {
        return zumbaTrainingRepository.save(zumbaTraining);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteZumbaTraining(@PathVariable Long id) {
        if (!zumbaTrainingRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        zumbaTrainingRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
