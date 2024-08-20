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
import { MenuComponent } from './components/menu/menu.component';
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
import { GmapComponent } from './components/pages/gmap/gmap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { DoctorGridCardComponent } from './components/pages/doctors/doctor-grid-card/doctor-grid-card.component';
import { DoctorListCardsComponent } from './components/pages/doctors/doctor-list-cards/doctor-list-cards.component';
import { SearchComponent } from './components/pages/doctor-search/search/search.component';
import { SearchFilterComponent } from './components/pages/doctor-search/search/search-filter/search-filter.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { ExtendedSearchComponent } from './components/pages/doctor-search/extended-search/extended-search.component';
import { ExtendedSearchFilterComponent } from './components/pages/doctor-search/extended-search/extended-search-filter/extended-search-filter.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SliderModule } from 'primeng/slider';
import { ExtendedCardComponent } from './components/pages/doctor-search/extended-search/extended-card/extended-card.component';
import { PaginatorModule } from 'primeng/paginator';
import { DoctorProfileComponent } from './components/pages/doctor-profile/doctor-profile.component';
import { DoctorProfileCardComponent } from './components/pages/doctor-profile/doctor-profile-card/doctor-profile-card.component';
import { DividerModule } from 'primeng/divider';
import { BookingComponent } from './components/pages/booking/booking.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { BookingSuccessComponent } from './components/pages/booking-success/booking-success.component';
import { ProfileSettingsComponent } from './components/pages/profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileImgCardComponent } from './components/pages/profile-settings/profile-img-card/profile-img-card.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BookingSummaryComponent } from './components/pages/checkout/booking-summary/booking-summary.component';
import { InvoiceViewComponent } from './components/pages/booking-success/invoice-view/invoice-view.component';
import { BookingSummaryCardComponent } from './components/pages/booking/booking-summary-card/booking-summary-card.component';
import { BookingCalenderComponent } from './components/pages/booking/booking-calender/booking-calender.component';

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
    GmapComponent,
    NavbarComponent,
    DoctorListCardsComponent,
    TooltipDirective,
    DoctorGridCardComponent,
    SearchComponent,
    SearchFilterComponent,
    ExtendedSearchComponent,
    ExtendedSearchFilterComponent,
    ExtendedCardComponent,
    DoctorProfileComponent,
    DoctorProfileCardComponent,
    BookingComponent,
    CheckoutComponent,
    BookingSuccessComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent,
    ProfileImgCardComponent,
    BookingSummaryComponent,
    InvoiceViewComponent,
    BookingSummaryCardComponent,
    BookingCalenderComponent,
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
    GoogleMapsModule,
    FloatLabelModule,
    CalendarModule,
    BreadcrumbModule,
    SliderModule,
    PaginatorModule,
    DividerModule,
    FileUploadModule,
    RadioButtonModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }



