import { Component } from '@angular/core';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {}
