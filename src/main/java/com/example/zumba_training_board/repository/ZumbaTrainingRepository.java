package com.example.zumba_training_board.repository;

import com.example.zumba_training_board.model.ZumbaTraining;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ZumbaTrainingRepository extends JpaRepository<ZumbaTraining, Long> {
}
