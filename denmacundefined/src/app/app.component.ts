import { Component } from '@angular/core';
import { LINKS } from './link.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = LINKS;
}
