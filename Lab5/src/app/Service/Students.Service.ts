import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  private URL_JSON ="http://localhost:3000/Students";

  // Handle all methods
    GetAllStudents(){
      return this.http.get(this.URL_JSON);
    }
    GetStudentById(id:number){
      return this.http.get(this.URL_JSON+"/"+id)
    }
    AddStudent(student:any){
      return this.http.post(this.URL_JSON,student)
    }
}
