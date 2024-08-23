import { Component, OnInit, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router'; 
import { SidebarService } from '../../services/sidebar.service';

interface Availability {
  name: string;
  code: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] // Fixed typo in `styleUrls`
})
export class MenuComponent implements OnInit {
  sidebarVisible: boolean = false;
  selectedAvailability: Availability | undefined; 
  availability: Availability[] | undefined; 
  sidebarItems: MenuItem[] | undefined;
  activeItem: string = '';
  sidebarOpen = false;
  overlayVisible = false;

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {
    this.availability = [
      { name: 'Şuanda Müsaitim', code: 'AVL' },
      { name: 'Şuanda Müsait Değilim', code: 'BSY' }
    ];

    this.sidebarItems = [
      { label: 'Ana Menü', icon: 'pi pi-home', routerLink: ['/home'] },
      { label: 'Doktorlar', icon: 'pi pi-address-book', routerLink: ['/doctors'] },
      { label: 'Doktor Ara', icon: 'pi pi-search-plus', routerLink: ['/search'] },
      { label: 'Doktor Profili', icon: 'pi pi-user', routerLink: ['/doctor-profile'] },
      { label: 'Randevular', icon: 'pi pi-book', routerLink: ['/booking'] },
      { label: 'Checkout', icon: 'pi pi-receipt', routerLink: ['/checkout'] },
      { label: 'Başarılı randevu', icon: 'pi pi-clipboard', routerLink: ['/booking-success'] },
      { label: 'Profil Ayarları', icon: 'pi pi-cog', routerLink: ['/profile-settings'] },
      { label: 'Şifre Değiştir', icon: 'pi pi-key', routerLink: ['/change-password'] },
    ];

    this.sidebarService.sidebarOpen$.subscribe(open => {
      this.sidebarOpen = open;
    });

    this.sidebarService.overlayVisible$.subscribe(visible => {
      this.overlayVisible = visible;
    });

    // Check the screen size on initialization
    this.adjustForScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustForScreenSize();
  }

  adjustForScreenSize() {
    // Hide the slimbar on small screens (<=768px)
    if (window.innerWidth <= 768) {
      this.sidebarOpen = false;
      this.sidebarVisible = false;  // Ensure the slimbar is hidden
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.overlayVisible = this.sidebarOpen;
  
    // Add or remove the class to control visibility
    if (window.innerWidth <= 768) {
      if (this.sidebarOpen) {
        document.querySelector('.sidebar-container')?.classList.add('sidebar-open');
      } else {
        document.querySelector('.sidebar-container')?.classList.remove('sidebar-open');
      }
    }
  }
  

  setActiveItem(item: MenuItem) {
    this.activeItem = item.label;
    if (item.routerLink) {
      this.router.navigate(item.routerLink).then(() => {
        setTimeout(() => {
          this.closeSidebar();  // Close sidebar after navigation
        }, 300);  // Add a delay to allow animation to complete
      });
    }

    // Handle tooltip visibility by adding/removing 'clicked' class
    const slimbarItems = document.querySelectorAll('.slimbar-menu li');
    slimbarItems.forEach(el => el.classList.remove('clicked'));
    const currentItem = Array.from(slimbarItems).find(el => el.textContent.trim() === item.label);
    if (currentItem) {
      currentItem.classList.add('clicked');
    }
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
    this.sidebarOpen = false;
    this.overlayVisible = false;
  }
}
