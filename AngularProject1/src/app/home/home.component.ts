import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  WeatherForecast: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  getUser() {
    this.http.get('https://localhost:7131/WeatherForecast').subscribe({
      next: response => this.WeatherForecast = response,
      error: error => console.log(error),
      complete: () => console.log("request completed")
    })
  }
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}


