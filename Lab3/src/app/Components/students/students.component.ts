import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  @Input() DatatFromParent : { name: string, age: string }[] = [];

}
