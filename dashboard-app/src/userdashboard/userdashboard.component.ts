import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideHttpClient } from '@angular/common/http';
import { UserService } from '../services/user';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements AfterViewInit {
  userData: any = null;
  dashboardData: any = null;
  weatherData: any;
  deviceIds: any;

  constructor(private userService: UserService) {}

  ngAfterViewInit(): void {
    this.firstDashboardData();
    this.getDeviceList();
    this.getRecentWeatherData();
    this.getLastNDaysWeatherData();
  }

  firstDashboardData() {
    this.userService.getDashboardData().subscribe({
      next: (data: any) => {
        this.dashboardData = data;
        console.log('Dashboard Data:', data);
      },
      error: (err) => console.error('API Error:', err),
    });
  }
  getDeviceList() {
    this.userService.getDeviceListAPIData().subscribe({
      next: (data: any) => {
        this.deviceIds = data;
      },
      error: (err) => console.error('API Error:', err),
    });
  }
  getRecentWeatherData() {
    this.userService.getRecentWeatherAPIData().subscribe({
      next: (data: any) => {
        this.weatherData = data;
      },
      error: (err) => console.error('API Error:', err),
    });
  }
  getLastNDaysWeatherData() {
    this.userService.getLastNDaysWeatherData().subscribe({
      next: (data: any) => {},
      error: (err) => console.error('API Error:', err),
    });
  }
}
