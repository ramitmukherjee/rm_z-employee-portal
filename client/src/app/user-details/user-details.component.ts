import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService] 
})
export class UserDetailsComponent implements OnInit {

  users: User[] = [];
  asc = true;
  sortIconClass = 'fas fa-sort-alpha-down';

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers()
      .subscribe( data => {
        console.log(data);
        this.users = data;
      } );
  }

  trackById(index, user) {
    console.log(user);
    return user.id;
  }

  reverseSort() {
    this.asc = !this.asc;
    this.sortIconClass = this.asc == true ? 'fas fa-sort-alpha-down' : 'fas fa-sort-alpha-up';
    
  }

}
