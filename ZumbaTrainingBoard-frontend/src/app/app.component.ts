import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  zumbaTrainings: any[] = [];

  newTraining = {
    title: '',
    instructor: '',
    dateTime: '',
    durationMinutes: 60
  };

  addTraining() {
    console.log('Lisa treening:', this.newTraining);
  }

  deleteTraining(id: number) {
    console.log('Kustuta treening ID:', id);
  }
}
