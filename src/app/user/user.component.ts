import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


import { User } from '../shared/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
  animations:[
    trigger('rotate', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('800ms ease-out')),
      transition('default => rotated', animate('800ms ease-in'))
]),

trigger('rotates', [
  state('default', style({ transform: 'scale(1)' })),
  state('rotated', style({ transform: 'scale(0.5,0.5)' })),
  transition('rotated => default', animate('800ms ease-out')),
  transition('default => default', animate('800ms ease-in'))
])
  ]
})
export class UserComponent implements OnInit {

  users: User[];
 
pageSize=3;
searchText;

p: number = 1;
state: string = 'default';

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
    rotates() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  constructor(private router: Router, private userService: UserService) {
    
  }

 
  
  ngOnInit() {
    
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
     // this.userService.getUsers()
      //.subscribe(users => this.users = this.alldata =  users);
  
  }
  //onChange(){
    //var list = this.alldata;
     //if(this.filter.id){
      //list = list.filter(v => v.id == this.filter.id);
     //}
      //this.alldata = list;
  //}

  //resetFilter(){
    //this.filter = {};
    //this.onChange();
  //}


  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
        console.log(user);

      })
  };
  editUser(user: User): void {
    localStorage.removeItem("editemailAddress");
    localStorage.setItem("editemailAddress", user.emailAddress.toString());
    this.router.navigate(['edit']);
  };

 

}