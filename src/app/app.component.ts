import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos : any;

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.http.get("https://www.datos.gov.co/resource/fukd-wbkg.json")
    .subscribe(
      result => {
        this.datos = result;
      },
      error => {
        console.log("Problemas");
      }
    );
  }
}
