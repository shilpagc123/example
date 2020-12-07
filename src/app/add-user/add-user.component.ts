import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/user';
import { UserService } from '../user.service';


@Component({
  templateUrl: './add-user.component.html',
  animations:[

  ]
})
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  user: User = new User();

  constructor(private router: Router, private userService: UserService,private formBuilder: FormBuilder) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
          console.log(this.user);

        });

  };
  ngOnInit() {
    /*this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailAddress: ['', [Validators.required, Validators.email]],
        phnnum: ['', Validators.required]
    });*/
}

}

