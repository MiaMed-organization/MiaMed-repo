import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface Availability {
  name: string;
  code: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  avatarMenuItems: MenuItem[] | undefined;
  sidebarVisible: boolean = false;
  isMenuOpen: boolean = false;
  selectedAvailability: Availability | undefined; 
  availability: Availability[] | undefined; 
  sidebarItems: MenuItem[] | undefined;


  ngOnInit() {

    this.avatarMenuItems = [
      {
        label: 'Settings',
        icon: 'pi pi-cog'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        routerLink: ['../login']

      }
    ];

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
        label: 'Dashboard',
        icon: 'pi pi-home'
      },
      {
        label: 'Doctors',
        icon: 'pi pi-address-book',
        items: [
          {
            label: 'Map Grid',
          },
          {
            label: 'Map List',
          }
        ]
      },

      {
        label: 'Search Doctor',
        icon: 'pi pi-search-plus',
        items: [
          {
            label: 'Search-1',
          },
          {
            label: 'Search-2',
          }
        ]
      },

      {
        label: 'Doctor Profile',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Profile-1',
          },
          {
            label: 'Profile-2',
          }
        ]
      },

      {
        label: 'Booking',
        icon: 'pi pi-book'
      },

      {
        label: 'Checkout',
        icon: 'pi pi-receipt'
      },

      {
        label: 'Chat',
        icon: 'pi pi-comment'
      },

      {
        label: 'Profile Settings',
        icon: 'pi pi-cog'
      },

      {
        label: 'Change Password',
        icon: 'pi pi-key'
      },
    ];

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
