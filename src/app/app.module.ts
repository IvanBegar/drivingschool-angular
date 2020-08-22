import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ScheduleByFormComponent } from './schedule-by-form/schedule-by-form.component';
import { ScheduleByGroupComponent } from './schedule-by-group/schedule-by-group.component';
import { TeachersComponent } from './teachers/teachers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Router, RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { GroupComponent } from './groups/group/group.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { ScheduleListComponent } from './schedules/schedule-list/schedule-list.component';
import { ScheduleService } from './schedules/shared/schedule.service';
import { ApiService } from './shared/api.service';
import {HttpInterceptorService} from './shared/http-interceptor-service.service';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'by-group',
    component: ScheduleByGroupComponent
  },
  {
    path: 'by-form',
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
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout', component: LoginComponent
  },
  {
    path: 'sign-in',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CategoryComponent,
    ScheduleByFormComponent,
    ScheduleByGroupComponent,
    TeachersComponent,
    VehiclesComponent,
    ContactsComponent,
    SideNavigationComponent,
    GroupComponent,
    GroupsComponent,
    GroupListComponent,
    SchedulesComponent,
    ScheduleComponent,
    ScheduleListComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ScheduleService,
    ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
