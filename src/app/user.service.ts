import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { User } from './shared/user';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
user:User[];
selecteduser:User=new User();
  constructor(private http:HttpClient) {}
 
  private baseUrl="http://localhost:8080/webpage";
	// private userUrl = '/webpage';

  public getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+"/registrationform/getregisterformdetails");
  }
  getUserById(emailAddress: string) {
    return this.http.get<User>(this.baseUrl + '/registrationform/getregisterformdetail/'+emailAddress,httpOptions);
  }

  public deleteUser(user:User) {
    return this.http.delete(this.baseUrl + "/deleteregistrationform/"+ user.emailAddress,httpOptions);
   
  }

  public createUser(user:User) {
   return this.http.post<User>(this.baseUrl+"/registrationform/adduser/", user,httpOptions);
  }
  
  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/registrationform/updateuser/' + user.emailAddress, user,httpOptions);

  }
  getUser(id: number) {
    return this.http.get<User>(this.baseUrl + '/registrationform/getregisterformbyid/'+ id,httpOptions);
  }
}
