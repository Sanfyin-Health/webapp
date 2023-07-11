import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MainNavComponent } from './modules/admin/components/main-nav/main-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PatientComponent } from './modules/admin/components/patient/patient.component';
import { DoctorComponent } from './modules/admin/components/doctor/doctor.component';
import { AppointmentComponent } from './modules/admin/components/appointment/appointment.component';
import { LoginComponent } from './useraccess/login/login.component';
import { RegisterComponent } from './useraccess/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PatientComponent,
    DoctorComponent,
    AppointmentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
