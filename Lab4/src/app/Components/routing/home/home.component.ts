import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //#region FormGroup 
  regForm = new FormGroup({ 
    name: new FormControl("",[Validators.required, Validators.minLength(3)]), 
    age: new FormControl(0,[Validators.required, Validators.min(10), Validators.max(30)]), 
    email: new FormControl('example@gmail.com', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]) 
  }) 


  Check(){
    if(this.regForm.valid){
      alert("Valid Data")
    }else {
      alert("Data Not Valid")
    }
    
  }

  get AgeValid(){ 
    return this.regForm.controls["age"].valid; 
  } 

  get NameValid(){
    return this.regForm.controls["name"].valid; 
  }

  get EmailValid(){
    return this.regForm.controls["email"].valid; 
  } 
 
}

  

