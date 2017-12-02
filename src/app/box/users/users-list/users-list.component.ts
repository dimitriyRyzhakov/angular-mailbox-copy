import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public loader: boolean = false;
  public data;

  constructor(private userService: UsersService) {
  }



  ngOnInit(): void {
    this.loader = true;
    this.userService.getUsers().subscribe(response => {
        this.data = response;
        this.loader = false;
      },
      err => {
        console.log(`Error ${err.status} ${err.statusText}`);
      });
  }
}


