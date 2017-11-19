import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {User} from "../interfaces/IuserLogin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public model: any = {};
  public hideLogin: boolean = true;
  public loading: boolean = false;
  public error: string = '';
  public loginForm: FormGroup;

  users: User[] = [];

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,) {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/box/inbox']);
    }
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.hideLogin = false;
          this.router.navigate(['/box/inbox']);
        } else {

          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

}
