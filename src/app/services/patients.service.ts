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
        name: 'Adrian Bird',
        image: 'patient1.jpeg',
        appointmentDate: '10 Haziran 2024',
        appointmentTime: '10:45',
        location: 'New York, United States',
        patientId: 'P0001',
        totalFee: 200,
        paidDate: '21 Temmuz 2024',
        email: 'Kelly@Example.Com',
        phoneNumber: '+90 504 368 6874',
        callingType: 'Video Call',
        visitType: 'Genel ziyaret',
        appointmentType: 'Direkt Ziyaret',
        clinicLocation: 'Adrian’s Klinik',
        rating: 4,
        comment: "Kendisi çok ilgili bir doktor görüntülü görüşmemiz sayesinde kendimi tedavi aşamasında çok daha rahat hissettim. Emekleri için kendisine teşekkür ediyorum. Herkese gözüm kapalı önerebileceğim bir hizmet kalitesi.",
        commentDate: 'Bugün',
        isRecommend: true,
        bookingFee: 10,
        consultingFee: {
          type: 'Görüntülü Görüşme',
          price: 50
        },
        paymentMethod:
          { type: 'Debit Card', lastDigits: 2541, bank: 'HDFC Bank' }

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
        totalFee: 150,
        paidDate: '10 Haziran 2024',
        email: 'john.doe@example.com',
        phoneNumber: '+90 504 368 6875',
        callingType: 'Phone Call',
        visitType: 'Genel ziyaret',
        appointmentType: 'Direkt Ziyaret',
        clinicLocation: 'John’s Klinik',
        rating: 5,
        comment: "Muhteşem hizmet! Doktorum çok ilgiliydi ve tüm süreç sorunsuz geçti. Kesinlikle tavsiye ederim!",
        commentDate: '2 gün önce',
        isRecommend: true,
        bookingFee: 10,
        consultingFee: {
          type: 'Sesli Görüşme',
          price: 40
        },
        paymentMethod:
          { type: 'Credit Card', lastDigits: 1234, bank: 'Chase Bank' }

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
        totalFee: 250,
        paidDate: '13 Eylül 2024',
        email: 'jane.smith@example.com',
        phoneNumber: '+90 504 368 6876',
        callingType: 'In-Person',
        visitType: 'Klinik Danışmanlık',
        appointmentType: 'Kontrol',
        clinicLocation: 'Jane’s Klinik',
        rating: 3,
        comment: "Görüşme iyiydi ama daha kapsamlı olabilirdi diye düşünüyorum. Genel olarak fena değil.",
        commentDate: '1 ay önce',
        isRecommend: false,
        bookingFee: 10,
        consultingFee: {
          type: 'Mesajlaşma',
          price: 30
        },
        paymentMethod:
          { type: 'Paypal', lastDigits: 4352, bank: 'Paypal Account' }

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
        totalFee: 300,
        paidDate: '9 Ocak 2024',
        email: 'michael.brown@example.com',
        phoneNumber: '+90 504 368 6877',
        callingType: 'Video Call',
        visitType: 'Genel ziyaret',
        appointmentType: 'İlk Görüşme',
        clinicLocation: 'Michael’s Klinik',
        rating: 2,
        comment: "Görüşme aceleye getirilmiş gibi geldi ve aradığım yanıtları alamadım. Hayal kırıklığına uğramış.",
        commentDate: '2 gün önce',
        isRecommend: false,
        bookingFee: 10,
        consultingFee: {
          type: 'Görüntülü Görüşme',
          price: 50
        },
        paymentMethod:
          { type: 'Debit Card', lastDigits: 9876, bank: 'Citi Bank' }

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
        totalFee: 180,
        paidDate: '20 Ekim 2024',
        email: 'emily.davis@example.com',
        phoneNumber: '+90 504 368 6878',
        callingType: 'Phone Call',
        visitType: 'Klinik Danışmanlık',
        appointmentType: 'Kontrol',
        clinicLocation: 'Emily’s Klinik',
        rating: 5,
        comment: "Mükemmel hizmet! Personel güler yüzlüydü, doktor çok iyi ilgilendi. Kesinlikle tavsiye ederim!",
        commentDate: 'Bugün',
        isRecommend: true,
        bookingFee: 10,
        consultingFee: {
          type: 'Mesajlaşma',
          price: 30
        },
        paymentMethod:
          { type: 'Credit Card', lastDigits: 4321, bank: 'Wells Fargo' }

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
