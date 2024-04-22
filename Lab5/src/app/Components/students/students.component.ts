import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsService } from '../../Service/Students.Service';
import { OnestudentComponent } from '../onestudent/onestudent.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule,RouterModule,OnestudentComponent],
  providers:[StudentsService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  constructor(private service:StudentsService){}
  students:any;
  ngOnInit(): void {
    this.service.GetAllStudents().subscribe({
      next:(data)=>{
        // console.log(data)
      this.students = data;
      },
      error:(err)=>{console.log("Something went Wrong")}
    })

  }
}
