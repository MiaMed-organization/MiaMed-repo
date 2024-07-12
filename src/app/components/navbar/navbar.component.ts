import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  avatarMenuItems: MenuItem[] | undefined;
  isMenuOpen: boolean = false;

  ngOnInit(): void {
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
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
