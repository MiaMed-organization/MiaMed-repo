import { Injectable } from '@angular/core';
import { Patients } from '../interfaces/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  getPatientsData(): Patients[] {
    return [
      {
        id: '1',
        appointmentId: '#Apt0001',
        name: 'Adrian Marshall',
        image: 'patient1.jpeg',
        appointmentDate: '10 Haziran 2024', 
        appointmentTime: '10:45',
        location: 'New York, United States',
        patientId: 'P0001',
        fee: 200,
        paidDate: '21 Temmuz 2024',
        email: 'Kelly@Example.Com',
        phoneNumber: '+90 504 368 6874',
        callingType: 'Video Call',
        visitType: 'Genel ziyaret',
        appointmentType: 'Direkt Ziyaret',
        clinicLocation: 'Adrian’s Klinik',
        rating: 4,
        comment: "Thank you for this informative article! I've had a couple of hit-and-miss experiences with freelancers in the past, and I realize now that I wasn't vetting them properly. Your checklist for choosing the right freelancer is going to be my go-to from now on.",
        commentDate: 'Bugün',
        isRecommend: true
      },
      {
        id: '2',
        appointmentId: '#Apt0002',
        name: 'John Doe',
        image: 'patient2.jpeg',
        appointmentDate: '21 Temmuz 2024', 
        appointmentTime: '11:30',
        location: 'Los Angeles, United States',
        patientId: 'P0002',
        fee: 150,
        paidDate: '10 Haziran 2024',
        email: 'john.doe@example.com',
        phoneNumber: '+90 504 368 6875',
        callingType: 'Phone Call',
        visitType: 'Genel ziyaret',
        appointmentType: 'Direkt Ziyaret',
        clinicLocation: 'John’s Klinik',
        rating: 5,
        comment: "Amazing service! The doctor was very attentive and the entire process was smooth. Highly recommend!",
        commentDate: '2 gün önce',
        isRecommend: true
      },
      {
        id: '3',
        appointmentId: '#Apt0003',
        name: 'Jane Smith',
        image: 'patient3.jpeg',
        appointmentDate: '9 Ocak 2024', 
        appointmentTime: '14:00',
        location: 'Chicago, United States',
        patientId: 'P0003',
        fee: 250,
        paidDate: '13 Eylül 2024',
        email: 'jane.smith@example.com',
        phoneNumber: '+90 504 368 6876',
        callingType: 'In-Person',
        visitType: 'Klinik Danışmanlık',
        appointmentType: 'Kontrol',
        clinicLocation: 'Jane’s Klinik',
        rating: 3,
        comment: "The consultation was okay, but I feel like it could have been more thorough. Not bad overall.",
        commentDate: '1 ay önce',
        isRecommend: false
      },
      {
        id: '4',
        appointmentId: '#Apt0004',
        name: 'Michael Brown',
        image: 'patient4.jpeg',
        appointmentDate: '13 Eylül 2024',
        appointmentTime: '09:30',
        location: 'Houston, United States',
        patientId: 'P0004',
        fee: 300,
        paidDate: '9 Ocak 2024',
        email: 'michael.brown@example.com',
        phoneNumber: '+90 504 368 6877',
        callingType: 'Video Call',
        visitType: 'Genel ziyaret',
        appointmentType: 'İlk Görüşme',
        clinicLocation: 'Michael’s Klinik',
        rating: 2,
        comment: "The consultation felt rushed, and I didn't get the answers I was looking for. Disappointed.",
        commentDate: '2 gün önce',
        isRecommend: false
      },
      {
        id: '5',
        appointmentId: '#Apt0005',
        name: 'Emily Davis',
        image: 'patient5.jpeg',
        appointmentDate: '22 Ekim 2024', 
        appointmentTime: '13:15',
        location: 'Phoenix, United States',
        patientId: 'P0005',
        fee: 180,
        paidDate: '20 Ekim 2024',
        email: 'emily.davis@example.com',
        phoneNumber: '+90 504 368 6878',
        callingType: 'Phone Call',
        visitType: 'Klinik Danışmanlık',
        appointmentType: 'Kontrol',
        clinicLocation: 'Emily’s Klinik',
        rating: 5,
        comment: "Excellent service! The staff was friendly, and the doctor provided great care. Highly recommend!",
        commentDate: 'Bugün',
        isRecommend: true
      }
    ];
  }

  getPatientsMini() {
    return Promise.resolve(this.getPatientsData().slice(0, 5));
  }

  getPatientsSmall() {
    return Promise.resolve(this.getPatientsData().slice(0, 10));
  }

  getPatients() {
    return Promise.resolve(this.getPatientsData());
  }
}
