import { Routes } from '@angular/router'; 
import { StudentsComponent } from './Components/routing/students/students.component';
import { ProfileComponent } from './Components/routing/profile/profile.component';
import { HomeComponent } from './Components/routing/home/home.component';
import { ErrorComponent } from './Components/routing/error/error.component';
import { StudentDetailsComponent } from './Components/routing/student-details/student-details.component';

 
export const routes: Routes = [ 
    {path:"", component:HomeComponent}, 
    {path:"profile", component:ProfileComponent}, 
    {path:"students", component:StudentsComponent}, 
    {path:"students/:id", component:StudentDetailsComponent}, 
    {path:"**", component:ErrorComponent} 
];
