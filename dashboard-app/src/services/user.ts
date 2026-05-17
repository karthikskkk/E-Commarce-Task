import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardData {
  // Define interface based on your API response structure
  // For example:
  totalUsers: number;
  activeSessions: number;
  // add all expected fields here
}

@Injectable({
  providedIn: 'root', // Or you can provide in your component
})
export class UserService {
  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    let apiUrl =
      'https://ec2-65-0-61-101.ap-south-1.compute.amazonaws.com:18080/rasa-rest-api/api/v1/rasadashboard/getDashboardData';
    const username = 'user01';
    const password = 'test';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });

    return this.http.get<DashboardData>(apiUrl, { headers });
  }
  getDeviceListAPIData(): Observable<DashboardData> {
    let url =
      'https://ec2-65-0-61-101.ap-south-1.compute.amazonaws.com:18080/rasa-rest-api/api/v1/rasaweatherinfo/getDeviceList';
    const username = 'user01';
    const password = 'test';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });

    return this.http.get<DashboardData>(url, { headers });
  }
  getRecentWeatherAPIData(): Observable<DashboardData> {
    let url =
      'https://ec2-65-0-61-101.ap-south-1.compute.amazonaws.com:18080/rasa-rest-api/api/v1/rasaweatherinfo/getRecentWeatherData/230800';
    const username = 'user01';
    const password = 'test';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });

    return this.http.get<DashboardData>(url, { headers });
  }
  getLastNDaysWeatherData(): Observable<DashboardData> {
    let url =
      'https://ec2-65-0-61-101.ap-south-1.compute.amazonaws.com:18080/rasa-rest-api/api/v1/rasaweatherinfo/getLastNDaysWeatherData/0/1';
    const username = 'user01';
    const password = 'test';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });

    return this.http.get<DashboardData>(url, { headers });
  }
}
