import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../models/Message';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService] 
})
export class UserComponent implements OnInit {
  
  user: User;
  genderInvalidFlag = false;
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
  ];
  genders = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'}
  ];

  constructor( private fb: FormBuilder, private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    debugger;
    if (this.userForm.invalid) {
      let message = new Message();
      message.messages = ["Please fill in the requider form fields."];
      message.status = 'error';
      this.messageService.setMessage(message);

      if (this.gender.invalid) {
        this.gender.markAsTouched;
      }

      return;
    }
    this.userService.createUser(<User> this.userForm.value)
      .subscribe(data => {
        let message = new Message();
        message.messages = [`New user created with name: ${data.firstName} ${data.lastName}`]
        message.status = 'success';
        this.messageService.emit(message);
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
