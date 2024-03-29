import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwaComponent } from './Components/pwa/pwa.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'Progressive-Web-App', component: PwaComponent },
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
