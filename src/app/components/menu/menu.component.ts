import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router'; 
import { SidebarService } from '../../services/sidebar.service';
import { TooltipModule } from 'primeng/tooltip';

interface Availability {
  name: string;
  code: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
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
      {
        name: 'Şuanda Müsaitim',
        code: 'AVL'
      },
      {
        name: 'Şuanda Müsait Değilim',
        code: 'BSY'
      }
    ];

    this.sidebarItems = [
      {
        label: 'Ana Menü',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Doktorlar',
        icon: 'pi pi-address-book',
        routerLink: ['/doctors']
        
      },

      {
        label: 'Doktor Ara',
        icon: 'pi pi-search-plus',
        routerLink: ['/search']
        
      },

      {
        label: 'Doktor Profili',
        icon: 'pi pi-user',
       
      },

      {
        label: 'Randevular',
        icon: 'pi pi-book'
      },

      {
        label: 'Checkout',
        icon: 'pi pi-receipt'
      },

      {
        label: 'Mesaj',
        icon: 'pi pi-comment'
      },

      {
        label: 'Profil Ayarları',
        icon: 'pi pi-cog'
      },

      {
        label: 'Şifre Değiştir',
        icon: 'pi pi-key'
      },
    ];

    this.sidebarService.sidebarOpen$.subscribe(open => {
      this.sidebarOpen = open;
    });

    this.sidebarService.overlayVisible$.subscribe(visible => {
      this.overlayVisible = visible;
    });
  
  }

  setActiveItem(item: MenuItem) {
    this.activeItem = item.label;
    if (item.routerLink) {
        this.router.navigate(item.routerLink).then(() => {
            setTimeout(() => {
                this.closeSidebar(); // Sayfa değişiminden sonra sidebar'ı kapat
            }, 300); // 300ms gecikme ekleyerek animasyonun tamamlanmasını sağla
        });
    }

    // Tooltip'in görünürlüğünü kaldırmak için clicked sınıfını ekle/kaldır
    const slimbarItems = document.querySelectorAll('.slimbar-menu li');
    slimbarItems.forEach(el => el.classList.remove('clicked'));
    const currentItem = Array.from(slimbarItems).find(el => el.textContent.trim() === item.label);
    if (currentItem) {
        currentItem.classList.add('clicked');
    }
}

  closeSidebar() {
    this.sidebarService.closeSidebar();
    this.overlayVisible = false;
  }
  
}
