import { Injectable } from '@angular/core';
import { Doctors } from '../interfaces/doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  getDoctorsData(): Doctors[] {
    return[
      {
        id: '1',
        name: 'Dr. Ruby Perrin',
        image: 'doctor1.jpeg',
        availability: '22 Mart Cuma',
        price: 300,
        location: 'Florida, USA',
        languages: 'German',
        rating: 4,
        feedback: 24,
        recommended: 90,
        field: 'Kalp Hastalıkları',
        services: 'Kalp muayenesi',
        icon: 'pi-heart',
        clinicImage: 'clinic1.jpeg'
      },
      {
        id: '2',
        name: 'Dr. John Doe',
        image: 'doctor2.jpeg',
        availability: '23 Mart Cumartesi',
        price: 500,
        location: 'New York, USA',
        languages: 'English',
        rating: 5,
        feedback: 30,
        recommended: 85,
        field: 'Deri Hastalıkları',
        services: 'Cilt muayenesi',
        icon: 'pi-chart-bar',
        clinicImage: 'clinic2.jpeg'
      },
      {
        id: '3',
        name: 'Dr. Jane Smith',
        image: 'doctor3.jpeg',
        availability: '24 Mart Pazar',
        price: 400,
        location: 'California, USA',
        languages: 'Spanish',
        rating: 3,
        feedback: 20,
        recommended: 70,
        field: 'Göz Hastalıkları',
        services: 'Göz muayenesi',
        icon: 'pi-eye',
        clinicImage: 'clinic3.jpeg'
      },
      {
        id: '4',
        name: 'Dr. Alan Brown',
        image: 'doctor4.jpeg',
        availability: '25 Mart Pazartesi',
        price: 700,
        location: 'Texas, USA',
        languages: 'French',
        rating: 4,
        feedback: 40,
        recommended: 95,
        field: 'Diş Hekimliği',
        services: 'Diş muayenesi',
        icon: 'pi-heart',
        clinicImage: 'clinic4.jpeg'
      },
      {
        id: '5',
        name: 'Dr. Emily White',
        image: 'doctor5.jpeg',
        availability: '26 Mart Salı',
        price: 350,
        location: 'Nevada, USA',
        languages: 'Italian',
        rating: 2,
        feedback: 15,
        recommended: 60,
        field: 'Ortopedi',
        services: 'Kemik muayenesi',
        icon: 'pi-chart-bar',
        clinicImage: 'clinic5.jpeg'
      },
      {
        id: '6',
        name: 'Dr. Sarah Green',
        image: 'doctor6.jpeg',
        availability: '27 Mart Çarşamba',
        price: 450,
        location: 'Washington, USA',
        languages: 'Portuguese',
        rating: 5,
        feedback: 35,
        recommended: 88,
        field: 'Nöroloji',
        services: 'Beyin muayenesi',
        icon: 'pi-heart',
        clinicImage: 'clinic6.jpeg'
      },
      {
        id: '7',
        name: 'Dr. Michael Blue',
        image: 'doctor7.jpeg',
        availability: '28 Mart Perşembe',
        price: 600,
        location: 'Oregon, USA',
        languages: 'Russian',
        rating: 3,
        feedback: 28,
        recommended: 75,
        field: 'KBB',
        services: 'Kulak Burun Boğaz muayenesi',
        icon: 'pi-eye',
        clinicImage: 'clinic7.jpeg'
      },
      {
        id: '8',
        name: 'Dr. David Black',
        image: 'doctor8.jpeg',
        availability: '29 Mart Cuma',
        price: 800,
        location: 'Arizona, USA',
        languages: 'Japanese',
        rating: 4,
        feedback: 22,
        recommended: 80,
        field: 'Plastik Cerrahi',
        services: 'Estetik muayenesi',
        icon: 'pi-chart-bar',
        clinicImage: 'clinic8.jpeg'
      },
      {
        id: '9',
        name: 'Dr. Nancy Red',
        image: 'doctor9.jpeg',
        availability: '30 Mart Cumartesi',
        price: 500,
        location: 'Colorado, USA',
        languages: 'Korean',
        rating: 5,
        feedback: 50,
        recommended: 99,
        field: 'Pediatri',
        services: 'Çocuk muayenesi',
        icon: 'pi-heart',
        clinicImage: 'clinic9.jpeg'
      },
      {
        id: '10',
        name: 'Dr. Steven Purple',
        image: 'doctor10.jpeg',
        availability: '31 Mart Pazar',
        price: 650,
        location: 'Utah, USA',
        languages: 'Chinese',
        rating: 2,
        feedback: 12,
        recommended: 55,
        field: 'Psikiyatri',
        services: 'Ruh sağlığı muayenesi',
        icon: 'pi-eye',
        clinicImage: 'clinic10.jpeg'
      },
    ];
  }

  getDoctors() {
    return Promise.resolve(this.getDoctorsData());
  }
}
