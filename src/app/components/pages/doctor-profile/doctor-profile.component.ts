import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Doctors } from '../../../interfaces/doctors';
import { DoctorsService } from '../../../services/doctors.service';
import { Patients } from '../../../interfaces/patients';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrl: './doctor-profile.component.css'
})
export class DoctorProfileComponent implements OnInit {

  doctors: Doctors[] = [];
  firstDoctor!: Doctors;
  firstDoctorFeedback: Patients[] = [];

  displayedFeedback: Patients[] = [];
  currentPage: number = 0;
  pageSize: number = 2;
  isCollapsed: boolean = true;
  showReadMore: boolean = false;
  displayedBio: string = '';
  readonly maxLength: number = 97; 

  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef;

  constructor(private doctorsService: DoctorsService, private patientsService: PatientsService) { }

  ngOnInit(): void {

    this.doctorsService.getDoctors().then((data: Doctors[]) => {
      this.doctors = data;
      if (this.doctors.length > 0) {
        this.firstDoctor = this.doctors[0];
        console.log("Doctor Data:", this.firstDoctor);
        this.initializeBio(); 
      }
    });

    this.patientsService.getPatients().then((data: Patients[]) => {
      this.firstDoctorFeedback = data;
      this.updateDisplayedFeedback();
    });
  }

  initializeBio(): void {
    if (this.firstDoctor.bio && this.firstDoctor.bio.length > this.maxLength) {
      this.displayedBio = this.firstDoctor.bio.slice(0, this.maxLength) + '...';
      this.showReadMore = true;
    } else {
      this.displayedBio = this.firstDoctor.bio;
    }
  }

  toggleReadMore(): void {
    this.isCollapsed = !this.isCollapsed;
    this.displayedBio = this.isCollapsed
      ? this.firstDoctor.bio.slice(0, this.maxLength) + '...'
      : this.firstDoctor.bio;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.updateDisplayedFeedback();
  }

  updateDisplayedFeedback() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedFeedback = this.firstDoctorFeedback.slice(startIndex, endIndex);
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
