import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { SearchComponent } from './components/pages/doctor-search/search/search.component';
import { ExtendedSearchComponent } from './components/pages/doctor-search/extended-search/extended-search.component';

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
    path: 'extended-search',
    component: ExtendedSearchComponent,
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
