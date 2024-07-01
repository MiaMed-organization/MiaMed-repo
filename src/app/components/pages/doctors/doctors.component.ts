import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';
import { DoctorsService } from '../../../services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit{
  doctors!: Doctors[];

  constructor(private doctorsService: DoctorsService){}

  ngOnInit(): void {
    this.doctorsService.getDoctors().then((data)=>{
      this.doctors=data;
    });
  }

}
