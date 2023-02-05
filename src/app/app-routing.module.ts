import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivestudentsComponent } from './components/activestudents/activestudents.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StudentregisterComponent } from './components/studentregister/studentregister.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'activestudents', component: ActivestudentsComponent },
  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'nav', component: NavComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
