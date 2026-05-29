import { Component, OnInit } from '@angular/core';
import { ZumbaTraining, ZumbaTrainingService } from './services/zumba-training.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ZumbaTrainingService],   // ← SEE ON PUUDU
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  zumbaTrainings: ZumbaTraining[] = [];

  newTraining: ZumbaTraining = {
    title: '',
    instructor: '',
    dateTime: '',
    durationMinutes: 60
  };

  constructor(private service: ZumbaTrainingService) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    this.service.getAll().subscribe(data => {
      this.zumbaTrainings = data;
      console.log("Laetud treeningud:", data);
    });
  }

  addTraining(): void {
    console.log("Lisa treening:", this.newTraining);

  // Kui dateTime on tühi, ära saada
  if (!this.newTraining.dateTime) {
    console.error("Kuupäev on tühi!");
    return;
  }

  // Teisendame ISO formaati
  const isoDate = new Date(this.newTraining.dateTime).toISOString();
  const payload = { ...this.newTraining, dateTime: isoDate };

  this.service.create(payload).subscribe(() => {
    this.loadTrainings();
    this.newTraining = { title: '', instructor: '', dateTime: '', durationMinutes: 60 };
  });
  }

  deleteTraining(id: number | undefined): void {
    if (!id) return;

    this.service.delete(id).subscribe(() => {
      this.loadTrainings(); // uuendab tabeli pärast kustutamist
    });
  }
}