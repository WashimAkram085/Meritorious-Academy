

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ResultsComponent } from './components/results/results.component';
import { NoticesComponent } from './components/notices/notices.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '/home' }
];
