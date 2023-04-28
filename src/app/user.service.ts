import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public jsonapi = 'http://localhost:3000/employees/';
  //http://localhost:3000/employees/
 
  constructor(private http : HttpClient){

  }

      // To Get All List
  getUsers(): Observable<any> {
      return this.http.get<any>(this.jsonapi);
  }

      // To Get a Singlar User
  getUser(id: number): Observable<any>{
      return this.http.get<any>(`${this.jsonapi}/${id}`);
  }  
  
      //  To add user
  addUser(user: any): Observable<any>{
    return this.http.post<any>(this.jsonapi,user);
  }    

     //  Update User
  updateUser(user: any): Observable<any>{
    return this.http.put<any>( `${this.jsonapi}/${user.id}`,user);
  }

     //  Delete User
  deleteUser(id: number): Observable<any> {
    // return this.http.delete(this.jsonapi,id);
    return this.http.delete(`${this.jsonapi}/${id}`);
  }

  // Adding Employee
  addEmployee(data : any): Observable<any> {
     return this.http.post(this.jsonapi,data)
  }

  // Get all the Employee
  getEmployees(): Observable<any>{
      return this.http.get(this.jsonapi);
  }

   // Delete Employee
   deleteEmployeee(id : any): Observable<any> {
    return this.http.delete(this.jsonapi,id);
    //http://localhost:3000/employees/7
 }

 deleteEmployee(id: number): Observable<any> {
  // return this.http.delete(this.jsonapi,id);
  return this.http.delete(`${this.jsonapi}/${id}`);
}



}
