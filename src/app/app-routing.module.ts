import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: 'merakiarchdesigns.io', component: HomeComponent
  },
  {
    path: 'merakiarchdesigns.io/home', component: HomeComponent
  },
  {
    path: 'merakiarchdesigns.io/projects', component: ProjectComponent
  },
  {
    path: 'merakiarchdesigns.io/aboutus', component: AboutComponent
  },
  {
    path: 'merakiarchdesigns.io/contact', component: ContactComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'projects', component: ProjectComponent
  },
  {
    path: 'aboutus', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
