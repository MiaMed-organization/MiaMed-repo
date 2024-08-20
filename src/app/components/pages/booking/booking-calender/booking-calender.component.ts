import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-calender',
  templateUrl: './booking-calender.component.html',
  styleUrl: './booking-calender.component.css'
})
export class BookingCalenderComponent {

  days = [
    { day: 'Pazartesi', date: '1 Eylül', active: true },
    { day: 'Salı', date: '2 Eylül', active: false },
    { day: 'Çarşamba', date: '3 Eylül', active: false },
    { day: 'Perşembe', date: '4 Eylül', active: false },
    { day: 'Cuma', date: '5 Eylül', active: false },
    { day: 'Cumartesi', date: '6 Eylül', active: false },
    { day: 'Pazar', date: '7 Eylül', active: false }
  ];
  
  
    timeSlots = {
      morning: ['09:00 - 09:30', '10:00 - 10:30', '11:00 - 11:30'],
      afternoon: ['12:00 - 12:30', '01:00 - 01:30', '02:30 - 03:00'],
      evening: ['03:00 - 03:30', '04:00 - 04:30', '05:00 - 05:30'],
    };
  
    selectedTime: string;
  
    selectTime(time: string) {
      this.selectedTime = time;
    }
  }
  

