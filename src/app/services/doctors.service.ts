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
        bio: 'Highly motivated and experienced doctor with a passion for providing excellent care to patients. Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine. Skilled in using the latest technology to streamline patient care. Committed to delivering compassionate, personalized care to each and every patient.',
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
        availableTime: '10:30 - 16:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Cambridge University Hospital', 'Hill Medical Hospital'],
            timePeriod: ['Aralık 2020 - Ocak 2022', 'Ekim 2022 - Aralık 2022'],
            total: ['2 Years 2 months', '1 Years 1 months'],
            experiencedIn: [
              'Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.',
              'Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine.'
            ]
          }
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
        hospital: 'Mavi Deniz Hastanesi',
        bookedAppointment: 95,
        languages: ['İngilizce'],
        rating: 4,
        feedback: 30,
        recommended: 85,
        bio: 'Passionate and dedicated to providing high-quality care to all patients. Extensive experience in diagnostics and emergency medicine. Strong focus on personalized treatment plans.',
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
        availableTime: '09:00 - 15:30',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['New York Presbyterian Hospital', 'Mount Sinai Hospital'],
            timePeriod: ['Ocak 2018 - Mart 2020', 'Nisan 2020 - Ağustos 2021'],
            total: ['2 Years 2 months', '1 Years 4 months'],
            experiencedIn: [
              'Extensive experience in diagnostics and emergency medicine, with a focus on dermatology.',
              'Focused on personalized treatment plans for patients with complex skin conditions.'
            ]
          }
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
        hospital: 'Yeşil Bahar Hastanesi',
        bookedAppointment: 45,
        languages: ['Türkçe', 'İngilizce'],
        rating: 1,
        feedback: 20,
        recommended: 70,
        bio: 'Dedicated pediatrician with a strong commitment to providing excellent care to children. Specialized in childhood diseases and early diagnosis.',
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
        availableTime: '08:00 - 13:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['UCLA Medical Center', 'Stanford Children\'s Health'],
            timePeriod: ['Temmuz 2019 - Aralık 2020', 'Ocak 2021 - Ekim 2021'],
            total: ['1 Year 6 months', '9 months'],
            experiencedIn: [
              'Specialized in childhood diseases with a focus on early diagnosis.',
              'Provided excellent pediatric care, focusing on childhood diseases and treatments.'
            ]
          }
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
        hospital: 'Gümüş Şehir Hastanesi',
        bookedAppointment: 75,
        languages: ['İngilizce', 'Çince'],
        rating: 2,
        feedback: 40,
        recommended: 95,
        bio: 'Experienced dentist with a passion for oral health. Committed to providing the best possible care to patients with a variety of dental conditions.',
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
        availableTime: '11:00 - 17:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Texas Dental Center', 'Dallas Dental Clinic'],
            timePeriod: ['Mart 2018 - Mayıs 2020', 'Haziran 2020 - Kasım 2021'],
            total: ['2 Years 3 months', '1 Year 5 months'],
            experiencedIn: [
              'Extensive experience in general dentistry, focusing on preventive care and dental hygiene.',
              'Specialized in complex dental procedures with a focus on patient comfort.'
            ]
          }
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
        hospital: 'Güneş Sağlık Merkezi',
        bookedAppointment: 60,
        languages: ['İngilizce'],
        rating: 5,
        feedback: 15,
        recommended: 60,
        bio: 'Orthopedic surgeon with a focus on sports injuries and rehabilitation. Passionate about helping patients regain mobility and improve their quality of life.',
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
        availableTime: '10:00 - 14:30',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Las Vegas Orthopedic Center', 'Reno Sports Clinic'],
            timePeriod: ['Şubat 2020 - Ağustos 2021', 'Eylül 2021 - Şubat 2022'],
            total: ['1 Year 6 months', '5 months'],
            experiencedIn: [
              'Specialized in sports injuries and rehabilitation, with a focus on orthopedic surgery.',
              'Focused on improving patient mobility and quality of life through advanced surgical techniques.'
            ]
          }
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
        hospital: 'Doğa Hastanesi',
        bookedAppointment: 85,
        languages: ['Almanca', 'İngilizce'],
        rating: 5,
        feedback: 35,
        recommended: 88,
        bio: 'Neurologist with extensive experience in treating a wide range of neurological disorders. Dedicated to providing compassionate and personalized care to each patient.',
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
        availableTime: '08:30 - 16:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Washington Neurology Center', 'Seattle Brain Institute'],
            timePeriod: ['Eylül 2017 - Aralık 2019', 'Ocak 2020 - Haziran 2021'],
            total: ['2 Years 4 months', '1 Year 6 months'],
            experiencedIn: [
              'Extensive experience in treating neurological disorders, with a focus on personalized care.',
              'Specialized in advanced neurological treatments, including diagnostics and patient education.'
            ]
          }
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
        hospital: 'Deniz Kabuğu Hastanesi',
        bookedAppointment: 30,
        languages: ['İngilizce', 'Türkçe'],
        rating: 1,
        feedback: 28,
        recommended: 75,
        bio: 'ENT specialist with a focus on ear, nose, and throat conditions. Committed to providing comprehensive care to patients of all ages.',
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
        availableTime: '09:00 - 14:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Oregon ENT Center', 'Portland Hearing Clinic'],
            timePeriod: ['Mart 2018 - Ağustos 2020', 'Eylül 2020 - Ocak 2022'],
            total: ['2 Years 6 months', '1 Year 5 months'],
            experiencedIn: [
              'Specialized in ear, nose, and throat conditions with a focus on comprehensive care.',
              'Provided advanced ENT treatments, focusing on patient comfort and successful outcomes.'
            ]
          }
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
        hospital: 'Kaktüs Sağlık Merkezi',
        bookedAppointment: 40,
        languages: ['Türkçe'],
        rating: 4,
        feedback: 22,
        recommended: 80,
        bio: 'Plastic surgeon with a strong emphasis on aesthetic procedures. Passionate about helping patients achieve their cosmetic goals with natural results.',
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
        availableTime: '11:30 - 16:30',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Phoenix Aesthetic Center', 'Tucson Cosmetic Clinic'],
            timePeriod: ['Nisan 2019 - Mart 2020', 'Nisan 2020 - Temmuz 2021'],
            total: ['11 months', '1 Year 3 months'],
            experiencedIn: [
              'Focused on aesthetic procedures, with a strong emphasis on natural results.',
              'Provided advanced cosmetic surgeries, specializing in patient satisfaction and safety.'
            ]
          }
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
        hospital: 'Kızıl Sağlık Hastanesi',
        bookedAppointment: 110,
        languages: ['Türkçe', 'İngilizce'],
        rating: 2,
        feedback: 50,
        recommended: 99,
        bio: 'Pediatrician with extensive experience in treating children of all ages. Focused on providing comprehensive care in a friendly and supportive environment.',
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
        availableTime: '09:30 - 15:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Denver Children\'s Hospital', 'Boulder Pediatric Clinic'],
            timePeriod: ['Ocak 2016 - Nisan 2018', 'Mayıs 2018 - Ekim 2020'],
            total: ['2 Years 3 months', '2 Years 5 months'],
            experiencedIn: [
              'Extensive experience in treating children of all ages, focusing on early intervention.',
              'Provided comprehensive pediatric care with a focus on patient and family support.'
            ]
          }
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
        hospital: 'Mor Hastane',
        bookedAppointment: 22,
        languages: ['Çince'],
        rating: 1,
        feedback: 12,
        recommended: 55,
        bio: 'Psychiatrist with a focus on child and adolescent mental health. Passionate about helping young people overcome challenges and achieve their full potential.',
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
        availableTime: '08:00 - 12:00',
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Utah Psychiatric Center', 'Salt Lake Child Psychiatry Clinic'],
            timePeriod: ['Temmuz 2019 - Şubat 2021', 'Mart 2021 - Aralık 2021'],
            total: ['1 Year 8 months', '9 months'],
            experiencedIn: [
              'Focused on child and adolescent mental health, providing comprehensive psychiatric care.',
              'Specialized in helping young people overcome mental health challenges and achieve their full potential.'
            ]
          }
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
