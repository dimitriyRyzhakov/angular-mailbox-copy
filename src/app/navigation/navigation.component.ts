import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {UserLoginService} from "../services/userLogin.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  public users = [];
  public searchText: string;
  public userId: Params;
  public elementRef;

  @ViewChild('name1')
  popup: ElementRef;

  @Output() filterLetter: EventEmitter<string> = new EventEmitter();


  constructor(private userService: UserLoginService,
              private authenticationService: AuthenticationService,
              private router: Router,
              myElement: ElementRef) {

              this.elementRef = myElement;

  }

  redirect() {
    this.router.navigate(['/box/inbox']);
  }

  filterTitle(modal){
    this.filterLetter.emit(modal);
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
