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
        languages: ['Türkçe', 'İngilizce', 'Almanca'],
        rating: 3,
        feedback: 24,
        recommended: 90,
        field: 'Kalp Hastalıkları',
        services: 'Kalp muayenesi',
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Kardiyoloji',
        availableDay: 'Bugün',
        experience: 10,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '2',
        name: 'Dr. John Doe',
        image: 'doctor-02.jpg',
        availability: '23 Mart Cumartesi',
        minPrice: 800,
        maxPrice: 1000,
        location: 'New York, USA',
        languages: ['İngilizce'],
        rating: 4,
        feedback: 30,
        recommended: 85,
        field: 'Deri Hastalıkları',
        services: 'KBB',
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Dermatoloji',
        availableDay: 'Yarın',
        experience: 8,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '3',
        name: 'Dr. Jane Smith',
        image: 'doctor-03.jpg',
        availability: '24 Mart Pazar',
        minPrice: 100,
        maxPrice: 300,
        location: 'California, USA',
        languages: ['Türkçe', 'İngilizce'],
        rating: 1,
        feedback: 20,
        recommended: 70,
        field: 'Pediatri',
        services: 'Göz muayenesi',
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Göz Hastalıkları',
        availableDay: 'Haftaiçi',
        experience: 5,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' }
        ]
      },
      {
        id: '4',
        name: 'Dr. Alan Brown',
        image: 'doctor-04.jpg',
        availability: '25 Mart Pazartesi',
        minPrice: 700,
        maxPrice: 800,
        location: 'Texas, USA',
        languages: ['İngilizce', 'Çince'],
        rating: 2,
        feedback: 40,
        recommended: 95,
        field: 'Pediatri',
        services: 'Diş muayenesi',
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Diş Hekimliği',
        availableDay: 'Bu ay',
        experience: 7,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '5',
        name: 'Dr. Emily White',
        image: 'doctor-05.jpg',
        availability: '26 Mart Salı',
        minPrice: 800,
        maxPrice: 950,
        location: 'Nevada, USA',
        languages: ['İngilizce'],
        rating: 5,
        feedback: 15,
        recommended: 60,
        field: 'Pediatri',
        services: 'Kemik muayenesi',
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Ortopedi',
        availableDay: 'Bugün',
        experience: 3,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '6',
        name: 'Dr. Sarah Green',
        image: 'doctor-06.jpg',
        availability: '27 Mart Çarşamba',
        minPrice: 150,
        maxPrice: 300,
        location: 'Washington, USA',
        languages: ['Almanca', 'İngilizce'],
        rating: 5,
        feedback: 35,
        recommended: 88,
        field: 'Nöroloji',
        services: 'Beyin muayenesi',
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Nöroloji',
        availableDay: 'Yarın',
        experience: 9,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '7',
        name: 'Dr. Michael Blue',
        image: 'doctor-07.jpg',
        availability: '28 Mart Perşembe',
        minPrice: 400,
        maxPrice: 500,
        location: 'Oregon, USA',
        languages: ['İngilizce', 'Türkçe'],
        rating: 1,
        feedback: 28,
        recommended: 75,
        field: 'KBB',
        services: 'Kulak Muayenesi',
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'KBB',
        availableDay: 'Haftaiçi',
        experience: 6,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '8',
        name: 'Dr. David Black',
        image: 'doctor-08.jpg',
        availability: '29 Mart Cuma',
        minPrice: 300,
        maxPrice: 500,
        location: 'Arizona, USA',
        languages: ['Türkçe'],
        rating: 4,
        feedback: 22,
        recommended: 80,
        field: 'Plastik Cerrahi',
        services: 'Estetik muayenesi',
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Plastik Cerrahi',
        availableDay: 'Bu ay',
        experience: 4,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' }
        ]
      },
      {
        id: '9',
        name: 'Dr. Nancy Red',
        image: 'doctor-09.jpg',
        availability: '30 Mart Cumartesi',
        minPrice: 900,
        maxPrice: 1500,
        location: 'Colorado, USA',
        languages: [ 'Türkçe', 'İngilizce'],
        rating: 2,
        feedback: 50,
        recommended: 99,
        field: 'Pediatri',
        services: 'Çocuk muayenesi',
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Pediatri',
        availableDay: 'Bugün',
        experience: 10,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
      },
      {
        id: '10',
        name: 'Dr. Steven Purple',
        image: 'doctor-10.jpg',
        availability: '31 Mart Pazar',
        minPrice: 650,
        maxPrice: 800,
        location: 'Utah, USA',
        languages: ['Çince'],
        rating: 1,
        feedback: 12,
        recommended: 55,
        field: 'Pediatri',
        services: 'Dolgu',
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        department: 'Psikiyatri',
        availableDay: 'Yarın',
        experience: 2,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ]
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
