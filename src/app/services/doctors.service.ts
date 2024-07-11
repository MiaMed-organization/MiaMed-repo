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
        image: 'doctor-01.jpg',
        availability: '22 Mart Cuma',
        minPrice: 300,
        maxPrice: 500,
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
        image: 'doctor-02.jpg',
        availability: '23 Mart Cumartesi',
        minPrice: 800,
        maxPrice: 1000,
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
        image: 'doctor-03.jpg',
        availability: '24 Mart Pazar',
        minPrice: 100,
        maxPrice: 300,
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
        image: 'doctor-04.jpg',
        availability: '25 Mart Pazartesi',
        minPrice: 700,
        maxPrice: 800,
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
        image: 'doctor-05.jpg',
        availability: '26 Mart Salı',
        minPrice: 800,
        maxPrice: 950,
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
        image: 'doctor-06.jpg',
        availability: '27 Mart Çarşamba',
        minPrice: 150,
        maxPrice: 300,
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
        image: 'doctor-07.jpg',
        availability: '28 Mart Perşembe',
        minPrice: 400,
        maxPrice: 500,
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
        image: 'doctor-08.jpg',
        availability: '29 Mart Cuma',
        minPrice: 300,
        maxPrice: 500,
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
        image: 'doctor-09.jpg',
        availability: '30 Mart Cumartesi',
        minPrice: 900,
        maxPrice: 1500,
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
        image: 'doctor-10.jpg',
        availability: '31 Mart Pazar',
        minPrice: 650,
        maxPrice: 800,
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
      {
        id: '11',
        name: 'Dr. Julia Washington',
        image: 'doctor-11.jpg',
        availability: '28 Mart Pazar',
        minPrice: 650,
        maxPrice: 800,
        location: 'Utah, USA',
        languages: 'Chinese',
        rating: 4,
        feedback: 10,
        recommended: 35,
        field: 'Psikiyatri',
        services: 'Ruh sağlığı muayenesi',
        icon: 'pi-eye',
        clinicImage: 'clinic11.jpeg'
      },
      {
        id: '12',
        name: 'Dr. Shaun Aponte',
        image: 'doctor-12.jpg',
        availability: '31 Eylül Pazar',
        minPrice: 950,
        maxPrice: 1200,
        location: 'Utah, USA',
        languages: 'Turkish',
        rating: 5,
        feedback: 30,
        recommended: 57,
        field: 'Diş Hekimi',
        services: 'Dolgu',
        icon: 'pi-heart',
        clinicImage: 'clinic12.jpeg'
      },
    ];
  }

  getDoctors() {
    return Promise.resolve(this.getDoctorsData());
  }

  getDoctorCount(): number {
    return this.getDoctorsData().length;
  }
}
