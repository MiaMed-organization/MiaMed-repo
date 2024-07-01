import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuComponent } from './components/home/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/home/cards/cards.component';
import { AppointmentComponent } from './components/home/appointment/appointment.component'; // ngModel için gerekliimport { FormsModule } from '@angular/forms'; // ngModel için gerekli
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/home/overview/overview.component';
import { UpcomingAppointmentComponent } from './components/home/upcoming-appointment/upcoming-appointment.component';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { InvoicesComponent } from './components/home/invoices/invoices.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GmapComponent } from './components/pages/gmap/gmap.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    CardsComponent,
    AppointmentComponent,
    OverviewComponent,
    UpcomingAppointmentComponent,
    InvoicesComponent,
    DoctorsComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    ImageModule,
    CheckboxModule,
    MenubarModule,
    AvatarModule,
    MenuModule,
    SidebarModule,
    BadgeModule,
    DropdownModule,
    FormsModule,
    TableModule,
    RatingModule,
    CommonModule,
    TagModule,
    ChartModule,
    TabViewModule,
    GoogleMapsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }



