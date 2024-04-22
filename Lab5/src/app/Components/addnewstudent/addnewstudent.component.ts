import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService } from '../../Service/Students.Service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addnewstudent',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  providers:[StudentsService],
  templateUrl: './addnewstudent.component.html',
  styleUrl: './addnewstudent.component.css'
})
export class AddnewstudentComponent {
  constructor(private service:StudentsService){}
  Registeration = new FormGroup({
    id: new FormControl("", [Validators.minLength(3), Validators.required]),
    name: new FormControl("", [Validators.minLength(3), Validators.required]),
    age: new FormControl(0, [Validators.min(20), Validators.max(40), Validators.required]),
    email: new FormControl("", [Validators.email,Validators.required]),
  })

  getdata() {
    console.log(this.Registeration.controls.id.valid);
    console.log(this.Registeration.controls.name.valid);
    console.log(this.Registeration.controls.age.valid);
    console.log(this.Registeration.controls.email.valid);
    let id = this.Registeration.controls.id.value;
    let name = this.Registeration.controls.name.value;
    let age = this.Registeration.controls.age.value;
    let email = this.Registeration.controls.email.value;
    
    console.log(`ID: ${id} Name: ${name} , Age: ${age} , Email: ${email}`);
    // this.n = name;
    let newstudent = {id,name,age,email};
    this.service.AddStudent(newstudent).subscribe();

  }

  get idValid() {
    return this.Registeration.controls.id.valid;
  }

  get nameValid() {
    return this.Registeration.controls.name.valid;
  }
  get ageValid() {
    return this.Registeration.controls.age.valid;
  }

  get emailValid() {
    return this.Registeration.controls.email.valid;
  }


  
}
