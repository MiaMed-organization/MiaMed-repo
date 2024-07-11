import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';
import { DoctorsService } from '../../../services/doctors.service';

interface Sort {
  name: string;
  code: string;
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit{
  doctors!: Doctors[];
  doctorCount: number = 0;

  sortedBy: Sort | undefined;
  sort: Sort[] | undefined; 

  constructor(private doctorsService: DoctorsService){}

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data)=>{
      this.doctors=data;
      this.doctorCount = this.doctorsService.getDoctorCount();
    });
   


    this.sort = [
        {
            name: 'Puan',
            code : 'PN'
            
        },
        {
            name: 'Popülerite',
             code : 'PLR'
            
        },
        {
            name: 'En son',
             code : 'ES'
            
        }
    ];

    this.activateButton('gridButton');
  }

  activateButton(buttonId: string): void {
    const buttons = document.querySelectorAll('.icon-button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    document.getElementById(buttonId)?.classList.add('active');
  }
}
