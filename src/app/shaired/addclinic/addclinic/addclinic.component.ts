import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addclinic',
  templateUrl: './addclinic.component.html',
  styleUrls: ['./addclinic.component.css']
})
export class AddclinicComponent implements OnInit{
  
  data: number[] = [1, 2, 3, 4, 5, 6];
  ngOnInit(): void {
    // console.log("reached");
  }
  selectedColor: string = '';

  changeColor(color: string) {
    this.selectedColor = color;
  }
  backgroundColor = 'lightblue';
  textColor = 'darkblue';
  fontSize = 50;


  // data binding
  d1: string = 'this is d1';

  imageurl: string = 'https://imgs.search.brave.com/GlQkBqhWFHzotnKH28_AOBvvBunpr3d4FaVzMXVb5Ps/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODk5/NjE5NTQyL3Bob3Rv/L3dpc2UtbWFuLWdv/dC1tYXRoZW1hdGlj/YWwtcHJvYmxlbS1z/b2x1dGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MElN/UDRwdWFROTJCUWpi/M0s4dkw3bjVwNzRR/WWJQVEF1Z3ZFaUxn/RDNIVT0';


  // event binding
  clickdata:string=''
  onclick() {
    this.clickdata = 'data is changed using click on button'
  }

  name = '';

  dob = '2000-06-06';

   person = {
     "name": "gaurav",
     "location":"rishikesh"
  }
  
}
