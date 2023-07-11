import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './modules/admin/components/appointment/appointment.component';
import { DoctorComponent } from './modules/admin/components/doctor/doctor.component';
import { PatientComponent } from './modules/admin/components/patient/patient.component';
import { LoginComponent } from './useraccess/login/login.component';
import { RegisterComponent } from './useraccess/register/register.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },  
  { path: '**', redirectTo: '/login',pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
