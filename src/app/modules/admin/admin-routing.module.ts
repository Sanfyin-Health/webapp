import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      {path: 'appointment', component:AppointmentComponent },
      {path: 'doctor', component:DoctorComponent},
      {path: 'patient', component:PatientComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


