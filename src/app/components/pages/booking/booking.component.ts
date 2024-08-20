import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  dropdownOpen = false;
  displayDate = 'Tarih Aralığı Seçin';

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectDate(option: string) {
    const today = new Date();
    
    switch (option) {
      case 'today':
        this.displayDate = this.formatDate(today);
        break;
      case 'yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        this.displayDate = this.formatDate(yesterday);
        break;
      case 'last7Days':
        const last7Days = new Date(today);
        last7Days.setDate(today.getDate() - 7);
        this.displayDate = `${this.formatDate(last7Days)} - ${this.formatDate(today)}`;
        break;
      case 'last30Days':
        const last30Days = new Date(today);
        last30Days.setDate(today.getDate() - 30);
        this.displayDate = `${this.formatDate(last30Days)} - ${this.formatDate(today)}`;
        break;
      case 'thisMonth':
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        this.displayDate = `${this.formatDate(startOfMonth)} - ${this.formatDate(today)}`;
        break;
      case 'lastMonth':
        const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        this.displayDate = `${this.formatDate(startOfLastMonth)} - ${this.formatDate(endOfLastMonth)}`;
        break;
      
    }
    this.dropdownOpen = false; // Dropdown'u kapat
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
