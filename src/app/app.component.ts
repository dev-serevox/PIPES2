import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipes reactive';
  euro: number = 58.06;
  yuan: number = 7.9;
  usd: number = 54.92;
}
