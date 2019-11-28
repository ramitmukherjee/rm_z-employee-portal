import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService] 
})
export class UserComponent implements OnInit {

  user: User;
  userForm = this.fb.group({
    firstName: 'Apurva',
    lastName: 'Das',
    emailId: 'apurvadas95@gmail.com'
  })

  constructor( private fb: FormBuilder, private userService: UserService ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createUser(<User> this.userForm.value)
      .subscribe(data => {
        console.log(data);
      });
  }

}
