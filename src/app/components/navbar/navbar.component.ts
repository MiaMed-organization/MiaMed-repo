import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  avatarMenuItems: MenuItem[] | undefined;
  isMenuOpen: boolean = false;

  constructor(private sidebarService: SidebarService, private router: Router) { }

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

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    this.toggleMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
