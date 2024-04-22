import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from '../../Service/Students.Service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule],
  providers:[StudentsService],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  id:any;
  student:any;
  constructor(myroute:ActivatedRoute,private service:StudentsService){
    this.id = myroute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.service.GetStudentById(this.id).subscribe({
      next:(data)=>{
        this.student= data;

      },
      error:(error)=>{console.log("Something wrnt Wrong");
      },
    })
  }

}
