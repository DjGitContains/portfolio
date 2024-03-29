import { Component } from '@angular/core';
import { ApiService, ResponseData } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-sample';
  
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    //this.fetchData();
  }
  
}
