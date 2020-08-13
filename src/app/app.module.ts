import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { ScheduleByFormComponent } from './schedule-by-form/schedule-by-form.component';
import { ScheduleByGroupComponent } from './schedule-by-group/schedule-by-group.component';
import { TeachersComponent } from './teachers/teachers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Router, RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'prices',
    component: PricesComponent
  },
  {
    path: 'schedule/by-group',
    component: ScheduleByGroupComponent
  },
  {
    path: 'schedule/by-form',
    component: ScheduleByFormComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    PricesComponent,
    ScheduleByFormComponent,
    ScheduleByGroupComponent,
    TeachersComponent,
    VehiclesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
