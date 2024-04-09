import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/routing/home/home.component';
import { HeaderComponent } from './Components/routing/header/header.component';
import { ProfileComponent } from './Components/routing/profile/profile.component';
import { StudentsComponent } from './Components/routing/students/students.component';
import { StudentDetailsComponent } from './Components/routing/student-details/student-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HeaderComponent,
            HomeComponent,
            ProfileComponent,
            StudentsComponent,
            StudentDetailsComponent,
            RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab4';
}
