import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dating app';
  weather: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getUser();
   
  }
  getUser() {
    this.http.get('https://localhost:7131/WeatherForecast').subscribe({
      next: response => this.weather = response,
      error: error => console.log(error),
      complete: () => console.log("request completed")
    })
  }
 

}
