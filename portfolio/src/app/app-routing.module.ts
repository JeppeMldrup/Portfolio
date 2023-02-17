import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projectlist', component: ProjectlistComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
