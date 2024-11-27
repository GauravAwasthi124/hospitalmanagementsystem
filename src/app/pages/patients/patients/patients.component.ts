import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PatientService } from '../../service/patient/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls:['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientData: any[]=[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'clinic_name', 'practtioner_name','edit','delete'];
  constructor(private patient: PatientService) { }
  ngOnInit(): void {
    this.getdata();
  }
  getdata() { 
    this.patient.getPatient().subscribe({
      next: (res: any) => {
        this.patientData = res;
      }  
    })
  }

}
