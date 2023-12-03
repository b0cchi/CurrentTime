import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'CurrentTime';
  currentTime = signal(new Date());
  constructor() {}
  ngOnInit(): void {
    this.start();
  }
  start(): void {
    interval(200).subscribe((x) => {
      this.currentTime.update((v) => (v = new Date()));
    });
  }
}
