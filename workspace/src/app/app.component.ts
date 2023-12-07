import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'CurrentTime';
  currentTime = signal(new Date());
  weekOfDay = signal('');
  constructor(private datePipe: DatePipe) {}
  ngOnInit(): void {
    this.start();
  }
  start(): void {
    interval(200).subscribe((x) => {
      const week = this.datePipe.transform(new Date(), 'E');
      let weekOfDayJa = '';
      switch (week) {
        case 'Sun':
          weekOfDayJa = '日';
          break;
        case 'Mon':
          weekOfDayJa = '月';
          break;
        case 'Tue':
          weekOfDayJa = '火';
          break;
        case 'Wed':
          weekOfDayJa = '水';
          break;
        case 'Thu':
          weekOfDayJa = '木';
          break;
        case 'Fri':
          weekOfDayJa = '金';
          break;
        case 'Sat':
          weekOfDayJa = '土';
          break;
      }
      this.weekOfDay.update((v) => (v = weekOfDayJa));
      this.currentTime.update((v) => (v = new Date()));
    });
  }
}
