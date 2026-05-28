package com.example.zumba_training_board.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class ZumbaTraining {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;          // nt "Zumba Strong"
    private String instructor;     // treeneri nimi
    private LocalDateTime dateTime;
    private int durationMinutes;   // kestus minutites

     public ZumbaTraining() {}

    // getterid/setterid
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }

    public LocalDateTime getDateTime() { return dateTime; }
    public void setDateTime(LocalDateTime dateTime) { this.dateTime = dateTime; }

    public int getDurationMinutes() { return durationMinutes; }
    public void setDurationMinutes(int durationMinutes) { this.durationMinutes = durationMinutes; }
}
