import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService] 
})
export class UserComponent implements OnInit {
  
  user: User;
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    department: ['', Validators.required]
  })
  departments = [
    {value: 'Dev', viewValue: 'Developer'},
    {value: 'Test', viewValue: 'Tester'},
    {value: 'IT', viewValue: 'IT'}
  ]

  constructor( private fb: FormBuilder, private userService: UserService,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    debugger;
    if (this.userForm.invalid) {
      return;
    }
    this.userService.createUser(<User> this.userForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/viewUsers']);
      });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get gender() {
    return this.userForm.get('gender');
  }
  get dateOfBirth() {
    return this.userForm.get('dateOfBirth');
  }
  get department() {
    return this.userForm.get('department');
  }

}
