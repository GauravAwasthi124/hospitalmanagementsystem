import { Component } from '@angular/core';

@Component({
  selector: 'app-clinic',
  template: `
  <h2>this is gaurav</h2>
  <div class=data>i am using templete not templateUrl</div>
  `,
  // templateUrl: './clinic.component.html',
  styles: [
    `
    h2{
      color:green;
    }
    .data{
      color:red;
      font-size:7mm;
    }
  ` 
  ]
  // styleUrls: ['./clinic.component.css']
})
export class ClinicComponent {
  constructor(){}
}
