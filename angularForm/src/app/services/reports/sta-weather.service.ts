import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaWeatherService {
  private baseUrl = environment.baseUrl;


  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/backend/api/sta_weather/read.php`);
  }
}
