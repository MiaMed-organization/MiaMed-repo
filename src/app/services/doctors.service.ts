import { Injectable } from '@angular/core';
import { Doctors } from '../interfaces/doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  getDoctorsData(): Doctors[] {
    return [
      {
        id: '1',
        name: 'Dr. Ruby Perrin',
        image: 'doctor-01.jpg',
        availability: '22 Mart Cuma',
        minPrice: 300,
        maxPrice: 500,
        location: 'Florida, USA',
        hospital: 'Lotus Hastanesi',
        bookedAppointment: 120,
        languages: ['Türkçe', 'İngilizce', 'Almanca'],
        rating: 3,
        feedback: 24,
        recommended: 90,
        field: 'Kalp Hastalıkları',
        services: ['Kalp muayenesi', 'EKG', 'Tansiyon ölçümü'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Kardiyoloji',
        availableDay: 'Bugün',
        experience: 10,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '10:30 - 16:00'
      },
      {
        id: '2',
        name: 'Dr. John Doe',
        image: 'doctor-02.jpg',
        availability: '23 Mart Cumartesi',
        minPrice: 800,
        maxPrice: 1000,
        location: 'New York, USA',
        hospital: 'Mavi Deniz Hastanesi',
        bookedAppointment: 95,
        languages: ['İngilizce'],
        rating: 4,
        feedback: 30,
        recommended: 85,
        field: 'Deri Hastalıkları',
        services: ['Cilt kontrolü', 'Alerji testi', 'Egzama tedavisi'],
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Dermatoloji',
        availableDay: 'Yarın',
        experience: 8,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '09:00 - 15:30'
      },
      {
        id: '3',
        name: 'Dr. Jane Smith',
        image: 'doctor-03.jpg',
        availability: '24 Mart Pazar',
        minPrice: 100,
        maxPrice: 300,
        location: 'California, USA',
        hospital: 'Yeşil Bahar Hastanesi',
        bookedAppointment: 45,
        languages: ['Türkçe', 'İngilizce'],
        rating: 1,
        feedback: 20,
        recommended: 70,
        field: 'Pediatri',
        services: ['Göz kontrolü', 'Göz testi'],
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Göz Hastalıkları',
        availableDay: 'Haftaiçi',
        experience: 5,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' }
        ],
        availableTime: '08:00 - 13:00'
      },
      {
        id: '4',
        name: 'Dr. Alan Brown',
        image: 'doctor-04.jpg',
        availability: '25 Mart Pazartesi',
        minPrice: 700,
        maxPrice: 800,
        location: 'Texas, USA',
        hospital: 'Gümüş Şehir Hastanesi',
        bookedAppointment: 75,
        languages: ['İngilizce', 'Çince'],
        rating: 2,
        feedback: 40,
        recommended: 95,
        field: 'Pediatri',
        services: ['Diş kontrolü', 'Dolgu muayenesi'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Diş Hekimliği',
        availableDay: 'Bu ay',
        experience: 7,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '11:00 - 17:00'
      },
      {
        id: '5',
        name: 'Dr. Emily White',
        image: 'doctor-05.jpg',
        availability: '26 Mart Salı',
        minPrice: 800,
        maxPrice: 950,
        location: 'Nevada, USA',
        hospital: 'Güneş Sağlık Merkezi',
        bookedAppointment: 60,
        languages: ['İngilizce'],
        rating: 5,
        feedback: 15,
        recommended: 60,
        field: 'Pediatri',
        services: ['Kemik kontrolü', 'Ortopedik muayene'],
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Ortopedi',
        availableDay: 'Bugün',
        experience: 3,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '10:00 - 14:30'
      },
      {
        id: '6',
        name: 'Dr. Sarah Green',
        image: 'doctor-06.jpg',
        availability: '27 Mart Çarşamba',
        minPrice: 150,
        maxPrice: 300,
        location: 'Washington, USA',
        hospital: 'Doğa Hastanesi',
        bookedAppointment: 85,
        languages: ['Almanca', 'İngilizce'],
        rating: 5,
        feedback: 35,
        recommended: 88,
        field: 'Nöroloji',
        services: ['Beyin kontrolü', 'Refleks testi'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Nöroloji',
        availableDay: 'Yarın',
        experience: 9,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '08:30 - 16:00'
      },
      {
        id: '7',
        name: 'Dr. Michael Blue',
        image: 'doctor-07.jpg',
        availability: '28 Mart Perşembe',
        minPrice: 400,
        maxPrice: 500,
        location: 'Oregon, USA',
        hospital: 'Deniz Kabuğu Hastanesi',
        bookedAppointment: 30,
        languages: ['İngilizce', 'Türkçe'],
        rating: 1,
        feedback: 28,
        recommended: 75,
        field: 'KBB',
        services: ['Kulak kontrolü', 'Burun muayenesi'],
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'KBB',
        availableDay: 'Haftaiçi',
        experience: 6,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '09:00 - 14:00'
      },
      {
        id: '8',
        name: 'Dr. David Black',
        image: 'doctor-08.jpg',
        availability: '29 Mart Cuma',
        minPrice: 300,
        maxPrice: 500,
        location: 'Arizona, USA',
        hospital: 'Kaktüs Sağlık Merkezi',
        bookedAppointment: 40,
        languages: ['Türkçe'],
        rating: 4,
        feedback: 22,
        recommended: 80,
        field: 'Plastik Cerrahi',
        services: ['Estetik muayenesi', 'Cilt kontrolü'],
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Plastik Cerrahi',
        availableDay: 'Bu ay',
        experience: 4,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' }
        ],
        availableTime: '11:30 - 16:30'
      },
      {
        id: '9',
        name: 'Dr. Nancy Red',
        image: 'doctor-09.jpg',
        availability: '30 Mart Cumartesi',
        minPrice: 900,
        maxPrice: 1500,
        location: 'Colorado, USA',
        hospital: 'Kızıl Sağlık Hastanesi',
        bookedAppointment: 110,
        languages: ['Türkçe', 'İngilizce'],
        rating: 2,
        feedback: 50,
        recommended: 99,
        field: 'Pediatri',
        services: ['Çocuk kontrolü', 'Büyüme testi'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Pediatri',
        availableDay: 'Bugün',
        experience: 10,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '09:30 - 15:00'
      },
      {
        id: '10',
        name: 'Dr. Steven Purple',
        image: 'doctor-10.jpg',
        availability: '31 Mart Pazar',
        minPrice: 650,
        maxPrice: 800,
        location: 'Utah, USA',
        hospital: 'Mor Hastane',
        bookedAppointment: 22,
        languages: ['Çince'],
        rating: 1,
        feedback: 12,
        recommended: 55,
        field: 'Pediatri',
        services: ['Diş kontrolü', 'Psikolojik muayene'],
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Psikiyatri',
        availableDay: 'Yarın',
        experience: 2,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '08:00 - 12:00'
      }
    ];
  }

  getDoctors() {
    return Promise.resolve(this.getDoctorsData());
  }

  getDoctorCount(): number {
    return this.getDoctorsData().length;
  }
}
