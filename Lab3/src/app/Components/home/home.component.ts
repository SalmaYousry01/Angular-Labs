import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { StudentsComponent } from '../students/students.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent,
            StudentsComponent
           ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "";
  age = "";
  registeredStudents: { name: string, age: string }[] = [];

  getData(e: any) {
    this.registeredStudents.push(e);
    console.log(this.registeredStudents);
  }
}

