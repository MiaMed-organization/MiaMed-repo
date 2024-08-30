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
        gender: 'Kadın',
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
        bio: 'Hastalarına mükemmel bakım sağlama konusunda tutkulu ve deneyimli bir doktor. Çocuk hastalıkları ve erken teşhis alanında uzmanlaşmış, çocuklara mükemmel bakım sunmaya kendini adamış bir doktor.',
        field: 'Kalp Hastalıkları',
        services: ['Kalp muayenesi', 'EKG', 'Tansiyon ölçümü'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Bugün',
        experience: 10,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '10:30 - 16:00',
        consultationFee: 400,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Cambridge University Hastanesi', 'Hill Medical Hastanesi'],
            timePeriod: ['Eylül 2020 - Ocak 2024', 'Mart 2016 - Ağustos 2020'],
            total: ['2 yıl 3 ay', '4 yıl 5 ay'],
            experiencedIn: ['Birinci sınıf sağlık hizmetleri ve acil tıp alanlarında özel uzmanlığa sahip.',
              'Çok çeşitli tıbbi ortamlarda deneyim sahibidir.']
          }
        ]
      },
      {
        id: '2',
        name: 'Dr. John Doe',
        image: 'doctor-02.jpg',
        gender: 'Erkek',
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
        bio: 'Tüm hastalara yüksek kaliteli bakım sunmaya adanmış ve tutkulu bir doktor. Tanı ve acil tıp alanında geniş deneyime sahip.',
        field: 'Deri Hastalıkları',
        services: ['Cilt kontrolü', 'Alerji testi', 'Egzama tedavisi'],
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Yarın',
        experience: 8,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '09:00 - 15:30',
        consultationFee: 900,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['New York Presbyterian Hospital', 'Mount Sinai Hospital'],
            timePeriod: ['Şubat 2018 - Mart 2022', 'Nisan 2013 - Ocak 2018'],
            total: ['4 yıl 1 ay', '5 yıl 9 ay'],
            experiencedIn: ['Acil tıp ve yoğun bakım ünitelerinde deneyim sahibi.',
              'Tanı ve tedavi süreçlerinde uzmandır.']
          }
        ]
      },
      {
        id: '3',
        name: 'Dr. Jane Smith',
        image: 'doctor-03.jpg',
        gender: 'Kadın',
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
        bio: 'Çocuk hastalıkları ve erken teşhis alanında uzmanlaşmış, çocuklara mükemmel bakım sunmaya kendini adamış bir doktor.',
        field: 'Pediatri',
        services: ['Göz kontrolü', 'Göz testi'],
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Haftaiçi',
        experience: 5,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' }
        ],
        availableTime: '08:00 - 13:00',
        consultationFee: 250,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['UCLA Medical Center', 'Stanford Children\'s Health'],
            timePeriod: ['Ocak 2019 - Şubat 2023', 'Mart 2015 - Aralık 2018'],
            total: ['4 yıl 1 ay', '3 yıl 9 ay'],
            experiencedIn: ['Çocuk sağlığı ve hastalıkları alanında uzmanlaşmış.',
              'Erken teşhis ve tedavi konusunda deneyimlidir.']
          }
        ]
      },
      {
        id: '4',
        name: 'Dr. Emily Brown',
        image: 'doctor-04.jpg',
        gender: 'Kadın',
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
        bio: 'Ağız sağlığına tutkulu bir diş hekimi. Çeşitli diş tedavilerinde deneyim sahibidir.',
        field: 'Diş Hekimliği',
        services: ['Diş kontrolü', 'Dolgu muayenesi'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Bu ay',
        experience: 7,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '11:00 - 17:00',
        consultationFee: 750,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Texas Dental Clinic', 'San Antonio Oral Surgery'],
            timePeriod: ['Ocak 2016 - Aralık 2022', 'Şubat 2010 - Aralık 2015'],
            total: ['6 yıl', '5 yıl 10 ay'],
            experiencedIn: ['Diş cerrahisi ve estetik diş hekimliği alanında uzman.',
              'Ağız sağlığı ve diş tedavilerinde geniş deneyim.']
          }
        ]
      },
      {
        id: '5',
        name: 'Dr. Alan White',
        image: 'doctor-05.jpg',
        gender: 'Erkek',
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
        bio: 'Spor yaralanmaları ve rehabilitasyon konusunda uzmanlaşmış bir ortopedi cerrahı. Hastaların hareket kabiliyetini yeniden kazanmalarına yardımcı olmayı amaçlar.',
        field: 'Ortopedi',
        services: ['Kemik kontrolü', 'Ortopedik muayene'],
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Bugün',
        experience: 3,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '10:00 - 14:30',
        consultationFee: 875,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Nevada Orthopedic Clinic', 'Sunrise Hospital and Medical Center'],
            timePeriod: ['Nisan 2019 - Ocak 2023', 'Şubat 2016 - Mart 2019'],
            total: ['3 yıl 9 ay', '3 yıl 1 ay'],
            experiencedIn: ['Spor yaralanmaları ve rehabilitasyon alanında uzman.',
              'Ortopedik cerrahi ve kas-iskelet sistemi tedavilerinde deneyimlidir.']
          }
        ]
      },
      {
        id: '6',
        name: 'Dr. Sarah Green',
        image: 'doctor-06.jpg',
        gender: 'Kadın',
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
        bio: 'Nöroloji alanında geniş bir yelpazede hastalıklar tedavi eden bir nörolog. Hastalara kişiselleştirilmiş ve şefkatli bakım sunmayı amaçlar.',
        field: 'Nöroloji',
        services: ['Beyin kontrolü', 'Refleks testi'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Yarın',
        experience: 9,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '08:30 - 16:00',
        consultationFee: 225,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['George Washington University Hospital', 'Virginia Mason Medical Center'],
            timePeriod: ['Haziran 2014 - Ağustos 2019', 'Eylül 2009 - Mayıs 2014'],
            total: ['5 yıl 2 ay', '4 yıl 8 ay'],
            experiencedIn: ['Nöroloji alanında geniş bir yelpazede hastalıklar tedavi etmiştir.',
              'Beyin cerrahisi ve nörolojik hastalıklar konusunda uzmandır.']
          }
        ]
      },
      {
        id: '7',
        name: 'Dr. Eva Blue',
        image: 'doctor-07.jpg',
        gender: 'Kadın',
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
        bio: 'KBB alanında uzmanlaşmış bir doktor. Kulak, burun ve boğaz hastalıkları konusunda geniş bir deneyime sahip.',
        field: 'KBB',
        services: ['Kulak kontrolü', 'Burun muayenesi'],
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Haftaiçi',
        experience: 6,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '09:00 - 14:00',
        consultationFee: 450,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Oregon Health & Science University', 'Legacy Emanuel Medical Center'],
            timePeriod: ['Temmuz 2018 - Kasım 2022', 'Ekim 2014 - Haziran 2018'],
            total: ['4 yıl 4 ay', '3 yıl 8 ay'],
            experiencedIn: ['KBB alanında çeşitli tedavi ve cerrahi işlemler yapmıştır.',
              'Kulak, burun, boğaz hastalıkları üzerine geniş deneyim sahibi.']
          }
        ]
      },
      {
        id: '8',
        name: 'Dr. David Black',
        image: 'doctor-08.jpg',
        gender: 'Erkek',
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
        bio: 'Estetik cerrahi alanında uzmanlaşmış bir plastik cerrah. Hastaların kozmetik hedeflerine doğal sonuçlarla ulaşmalarına yardımcı olmayı amaçlar.',
        field: 'Plastik Cerrahi',
        services: ['Estetik muayenesi', 'Cilt kontrolü'],
        icon: 'pi-chart-bar',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Bu ay',
        experience: 4,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' }
        ],
        availableTime: '11:30 - 16:30',
        consultationFee: 400,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Mayo Clinic', 'Phoenix Children\'s Hospital'],
            timePeriod: ['Nisan 2017 - Şubat 2021', 'Mart 2012 - Mart 2017'],
            total: ['3 yıl 10 ay', '5 yıl'],
            experiencedIn: ['Estetik cerrahi alanında uzman, doğal sonuçlar elde etmeye odaklanır.',
              'Çeşitli estetik prosedürler konusunda geniş deneyime sahip.']
          }
        ]
      },
      {
        id: '9',
        name: 'Dr. Steven Red',
        image: 'doctor-09.jpg',
        gender: 'KAdın',
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
        bio: 'Çocuk sağlığı ve hastalıkları alanında geniş deneyim sahibi bir pediatrist. Çocuklara dostane ve destekleyici bir ortamda kapsamlı bakım sunar.',
        field: 'Pediatri',
        services: ['Çocuk kontrolü', 'Büyüme testi'],
        icon: 'pi-heart',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Bugün',
        experience: 10,
        consultation: [
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '09:30 - 15:00',
        consultationFee: 1200,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['Children\'s Hospital Colorado', 'Rocky Mountain Hospital for Children'],
            timePeriod: ['Ocak 2015 - Eylül 2021', 'Mart 2010 - Aralık 2014'],
            total: ['6 yıl 8 ay', '4 yıl 9 ay'],
            experiencedIn: ['Çocuk sağlığı ve hastalıkları alanında geniş deneyim sahibi.',
              'Pediatri alanında uzmanlaşmış, geniş bir hasta kitlesi ile çalışmıştır.']
          }
        ]
      },
      {
        id: '10',
        name: 'Dr. Nancy Purple',
        image: 'doctor-10.jpg',
        gender: 'Kadın',
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
        bio: 'Çocuk ve ergen ruh sağlığı konusunda uzmanlaşmış bir psikiyatrist. Genç bireylerin zorlukları aşmalarına ve potansiyellerini gerçekleştirmelerine yardımcı olmayı amaçlar.',
        field: 'Kalp Hastalıkları',
        services: ['Diş kontrolü', 'Psikolojik muayene'],
        icon: 'pi-eye',
        clinicImages: ['clinic-01.jpg', 'clinic-02.jpg', 'clinic-03.jpg', 'clinic-04.jpg'],
        availableDay: 'Yarın',
        experience: 2,
        consultation: [
          { type: 'Görüntülü Görüşme', icon: 'pi-video' },
          { type: 'Sesli Görüşme', icon: 'pi-microphone' },
          { type: 'Mesajlaşma', icon: 'pi-comment' }
        ],
        availableTime: '08:00 - 12:00',
        consultationFee: 700,
        practiceExperience: [
          {
            img: ['experience-logo-01.svg', 'experience-logo-02.svg'],
            hospital: ['University of Utah Health', 'Primary Children\'s Hospital'],
            timePeriod: ['Ekim 2020 - Mart 2022', 'Haziran 2018 - Eylül 2020'],
            total: ['1 yıl 5 ay', '2 yıl 3 ay'],
            experiencedIn: ['Çocuk ve ergen ruh sağlığı konusunda uzmanlaşmış.',
              'Genç bireylerle çalışma konusunda geniş deneyime sahip.']
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

  filterDoctors(filters: any): Doctors[] {

    let filteredDoctors = this.getDoctorsData();

    console.log('Initial Doctors Count:', filteredDoctors.length); 

    // Cinsiyet filtresi
    if (filters.selectedGenders && filters.selectedGenders.length) {
        filteredDoctors = filteredDoctors.filter(doctor => filters.selectedGenders.includes(doctor.gender));
    }

    // Müsaitlik zamanı filtresi
    if (filters.selectedAvailableDays && filters.selectedAvailableDays.length) {
        filteredDoctors = filteredDoctors.filter(doctor => filters.selectedAvailableDays.includes(doctor.availableDay));
    }
  
    // Deneyim filtresi
    if (filters.selectedExperience && filters.selectedExperience.length) {
        filteredDoctors = filteredDoctors.filter(doctor => {
            const experienceYears = doctor.experience;
            return filters.selectedExperience.some(expRange => {
                if (expRange === '1-5') {
                    return experienceYears >= 1 && experienceYears <= 5;
                } else if (expRange === '5-10') {
                    return experienceYears > 5 && experienceYears <= 10;
                } else if (expRange === '10+') {
                    return experienceYears > 10;
                }
                return false;
            });
        });
    }

    // Online danışmanlık filtresi
    if (filters.selectedConsultations && filters.selectedConsultations.length) {
        filteredDoctors = filteredDoctors.filter(doctor => 
            filters.selectedConsultations.some(consultation => 
                doctor.consultation.map(c => c.type).includes(consultation)
            )
        );
    }

    // Dil filtresi
    if (filters.selectedLanguages && filters.selectedLanguages.length) {
        filteredDoctors = filteredDoctors.filter(doctor => 
            filters.selectedLanguages.some(language => doctor.languages.includes(language))
        );
    }

    // Değerlendirme filtresi
    if (filters.selectedRatings && filters.selectedRatings.length) {
        filteredDoctors = filteredDoctors.filter(doctor => filters.selectedRatings.includes(doctor.rating));
    }

    return filteredDoctors;
}




}
