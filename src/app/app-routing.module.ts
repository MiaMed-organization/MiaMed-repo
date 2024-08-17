import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { SearchComponent } from './components/pages/doctor-search/search/search.component';
import { ExtendedSearchComponent } from './components/pages/doctor-search/extended-search/extended-search.component';
import { DoctorProfileComponent } from './components/pages/doctor-profile/doctor-profile.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { BookingSuccessComponent } from './components/pages/booking-success/booking-success.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProfileSettingsComponent } from './components/pages/profile-settings/profile-settings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'doctor-profile',
    component: DoctorProfileComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'booking-success',
    component: BookingSuccessComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'extended-search',
    component: ExtendedSearchComponent,
  },
  {
    path: 'profile-settings',
    component: ProfileSettingsComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
