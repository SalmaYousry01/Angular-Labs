import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddnewstudentComponent } from './Components/addnewstudent/addnewstudent.component';

export const routes: Routes = [
    {path:"",redirectTo:"students",pathMatch:'full'},
    {path:"students",component:StudentsComponent},
    {path:"add",component:AddnewstudentComponent},
    {path:"students/:id",component:StudentDetailsComponent},
    {path:"**",component:ErrorComponent}
];
