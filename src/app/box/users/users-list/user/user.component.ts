import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../../services/users.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public oneUser: any = [];
  public loader: boolean = false;
  public userId: Params;

  constructor(private userService: UsersService,
              private routers: Router,
              private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      console.log(this.userId = params);
    });
  }

  removeUser(userId) {
    this.loader = true;
    this.userService.removeUser(userId).subscribe(() => {
      },
      err => {
        console.log(`Error ${err.status} ${err.statusText}`);
      }, () => {
        this.routers.navigate(['/users/users-list']);
      })
  }

  ngOnInit() {

    this.loader = true;

    this.userService.getOneUser(this.userId.id).subscribe(response => {
        this.oneUser = response;
        this.loader = false;
      },
      err => {
        console.log(`Error ${err.status} ${err.statusText}`);
      });

  }

}
