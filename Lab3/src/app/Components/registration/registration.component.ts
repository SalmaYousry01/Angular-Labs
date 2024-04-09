import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,
            CommonModule
           ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  name="";
  age="";
  student:{name:string, age:string} = {name:this.name, age:this.age};

  @Output() myEvent = new EventEmitter();

     Send(){
      if ((+this.age > 10 && +this.age < 30) && (+this.name.length >= 3)) {
      this.student = {name:this.name, age:this.age};
      this.myEvent.emit(this.student);
    }
  }

}
