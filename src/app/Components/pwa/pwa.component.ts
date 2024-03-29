import { Component } from '@angular/core';
import { ApiService, ResponseData } from 'src/app/services/api.service';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent {
  constructor(private apiService: ApiService) {}
  public responses: Array<ResponseData> | undefined;
  public visible: boolean = false;
  fetchData() : void {
    this.visible = true;
    this.apiService.fetch().subscribe(
      (data: Array<ResponseData>) => {
         console.log(data);
         this.responses= data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
