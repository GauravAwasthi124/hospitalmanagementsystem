import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedialogbox',
  templateUrl: './deletedialogbox.component.html',
  styleUrls: ['./deletedialogbox.component.css'],
  standalone: true,
  imports : [MatDialogModule,MatButtonModule]
})
export class DeletedialogboxComponent {
    
}
