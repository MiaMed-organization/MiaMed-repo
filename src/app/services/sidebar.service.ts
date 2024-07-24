import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  sidebarOpen$ = this.sidebarOpen.asObservable();
  
  private overlayVisible = new BehaviorSubject<boolean>(false);
  overlayVisible$ = this.overlayVisible.asObservable();

  toggleSidebar() {
    const isOpen = !this.sidebarOpen.value;
    this.sidebarOpen.next(isOpen);
    this.overlayVisible.next(isOpen);
  }

  closeSidebar() {
    this.sidebarOpen.next(false);
    this.overlayVisible.next(false);
  }
}
