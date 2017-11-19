import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "../services/userLogin.service";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  encapsulation: ViewEncapsulation.None,
  moduleId: module.id,
})
export class BoxComponent implements OnInit {

  public users = [];

  constructor(private userService: UserLoginService,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }
 
  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }


  loginOut() {
    this.users = [];
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
