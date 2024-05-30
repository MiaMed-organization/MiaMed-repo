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
            appointmentDate: '10 Haziran 2024', // Manuel olarak tarih belirtildi
            appointmentTime: '10:45',
            location: 'New York, United States',
            patientId: 'P0001',
            fee: 200,
            paidDate: new Date('2024-06-11'),
            email: 'Kelly@Example.Com',
            phoneNumber: '+90 504 368 6874',
            callingType: 'Video Call',
            visitType: 'General',
            appointmentType: 'Direct Visit',
            clinicLocation: 'Adrian’s Dentistry'
        },
        {
            id: '2',
            appointmentId: '#Apt0002',
            name: 'John Doe',
            image: 'patient2.jpeg',
            appointmentDate: '21 Temmuz 2024', // Manuel olarak tarih belirtildi
            appointmentTime: '11:30',
            location: 'Los Angeles, United States',
            patientId: 'P0002',
            fee: 150,
            paidDate: new Date('2024-06-12'),
            email: 'john.doe@example.com',
            phoneNumber: '+90 504 368 6875',
            callingType: 'Phone Call',
            visitType: 'General',
            appointmentType: 'Direct Visit',
            clinicLocation: 'John’s Clinic'
        },
        {
            id: '3',
            appointmentId: '#Apt0003',
            name: 'Jane Smith',
            image: 'patient3.jpeg',
            appointmentDate: '9 Ocak 2024', // Manuel olarak tarih belirtildi
            appointmentTime: '14:00',
            location: 'Chicago, United States',
            patientId: 'P0003',
            fee: 250,
            paidDate: new Date('2024-06-13'),
            email: 'jane.smith@example.com',
            phoneNumber: '+90 504 368 6876',
            callingType: 'In-Person',
            visitType: 'Clinic Consulting',
            appointmentType: 'Follow-Up',
            clinicLocation: 'Jane’s Clinic'
        },
        {
            id: '4',
            appointmentId: '#Apt0004',
            name: 'Michael Brown',
            image: 'patient4.jpeg',
            appointmentDate: '13 Eylül 2024', // Manuel olarak tarih belirtildi
            appointmentTime: '09:30',
            location: 'Houston, United States',
            patientId: 'P0004',
            fee: 300,
            paidDate: new Date('2024-06-14'),
            email: 'michael.brown@example.com',
            phoneNumber: '+90 504 368 6877',
            callingType: 'Video Call',
            visitType: 'General',
            appointmentType: 'Initial Consultation',
            clinicLocation: 'Michael’s Clinic'
        },
        {
            id: '5',
            appointmentId: '#Apt0005',
            name: 'Emily Davis',
            image: 'patient5.jpeg',
            appointmentDate: '22 Ekim 2024', // Manuel olarak tarih belirtildi
            appointmentTime: '13:15',
            location: 'Phoenix, United States',
            patientId: 'P0005',
            fee: 180,
            paidDate: new Date('2024-06-15'),
            email: 'emily.davis@example.com',
            phoneNumber: '+90 504 368 6878',
            callingType: 'Phone Call',
            visitType: 'Clinic Consulting',
            appointmentType: 'Follow-Up',
            clinicLocation: 'Emily’s Clinic'
        },
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
