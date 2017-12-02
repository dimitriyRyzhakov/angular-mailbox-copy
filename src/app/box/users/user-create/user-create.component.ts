import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../services/users.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from '@angular/router';
import {emailValidator} from "../../../reactive-validators/email-validator";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public addUserForm: FormGroup;
  public FormInvalid = false;
  public dataUser: Array<any> = [];
  public renameDataUser;
  public loader: boolean = false;
  public wrapperdataUser;
  public userId;
  public  EMAIL_REGEXP = '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i';

  constructor(private userService: UsersService,
              private formBuilder: FormBuilder,
              private routers: Router,
              private router: ActivatedRoute) {
    this.router.params.subscribe(params => this.userId = params)
  }

  postUser() {
    this.userService.postUsers(this.wrapperdataUser).subscribe(() => {
    }, err => {
      console.log(`Error ${err.status} ${err.statusText}`);
    }, () => {
      console.log('Done');
      this.routers.navigate(['/users/users-list']);
    });
  }

  renameUser() {
    this.userService.renameUser(this.userId.id, this.dataUser[0]).subscribe(() => {
      }, err => {
        console.log(`Error ${err.status} ${err.statusText}`);
      }, () => {
        console.log('Done');
        this.routers.navigate([`/users/users-list/${this.userId.id}`]);
      }
    );
  }

  addUser(form): void {
    console.log(form);
    if (form.valid) {
      this.loader = true;
      this.FormInvalid = false;
      this.dataUser = [...this.dataUser, ...form.value];
      this.addUserForm.reset();

      this.wrapperdataUser = {
        users: this.dataUser
      };

      this.postUser();

    } else {
      this.FormInvalid = true;
    }

  }

  putRenameUser(form) {
    if (form.valid) {
      this.loader = true;
      this.FormInvalid = false;
      this.dataUser = [...this.dataUser, ...form.value];
      this.renameUser();
    }

  }

  changeDateFormat(date) {
    if (this.renameDataUser.birthdate) {
      const dateFormat = new Date(date);
      return dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate();
    } else {
      return date;
    }
  }

  isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this.userService.getOneUser(this.userId.id).subscribe(res => {
          this.renameDataUser = res;
          this.addUserForm = this.formBuilder.group({
            fullName: [this.renameDataUser.fullName, [Validators.minLength(2), Validators.required]],
            email: [this.renameDataUser.email, [emailValidator, Validators.required]],
            birthdate: [this.changeDateFormat(this.renameDataUser.birthdate), []],
          });
        });
      }
    }
  }

  ngOnInit() {

    this.isEmpty(this.userId);


    this.addUserForm = this.formBuilder.group({
      fullName: [null, [Validators.minLength(2), Validators.required]],
      email: [null, [emailValidator, Validators.required]],
      birthdate: [null, [Validators.required]]
    });


  }

}
