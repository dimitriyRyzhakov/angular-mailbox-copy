import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BaseRequestOptions, HttpModule} from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AppComponent} from './app.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UserComponent} from './users/users-list/user/user.component';
import {UsersService} from './services/users.service';

import {HttpClientModule} from "@angular/common/http";
import {BirthdatePipe} from './birthdate.pipe';

import {RouterModule, Routes} from '@angular/router';
import {BoxComponent} from './box/box.component';
import {LoginComponent} from './login/login.component';
import {BoxListComponent} from './box/box-list/box-list.component';
import {LettersService} from "./services/letters.service";
import {LetterComponent} from './box/box-list/letter/letter.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameValidatorDirective} from './validators/name-validator.directive';
import {EmailValidatorDirective} from './validators/email-validator.directive';
import {SexValidatorDirective} from './validators/sex-validator.directive';
import {BirthdatValidatorDirective} from './validators/birthdat-validator.directive';
import {SearchPipe} from './pipes/search.pipe';
import {CreateLetterComponent} from "./create-letter/create-letter.component";
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UsersComponent } from './users/users.component';
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {UserLoginService} from "./services/userLogin.service";
import {fakeBackendProvider} from "./fake-backend/fake-backend";
import {MockBackend} from "@angular/http/testing";


const apiKey = '?apiKey=IDfsaUTMyV7Yis-KmKjiO-51QX9RRxvM';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: UsersComponent,
    children: [
      {
        path: 'users-list/:id',
        component: UserComponent,

      },
      {
        path: 'create-user',
        component: UserCreateComponent
      },
      {
        path: 'rename-user/:id',
        component: UserCreateComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      },
    ]
  },



  {
    path: 'box',
    canActivate: [AuthGuard],
    component: BoxComponent,
    children: [
      {
        path: 'spam-letters',
        component: BoxListComponent,
        data: {
          url: 'spam-letters',
        },
      },
      {
        path: 'create-letter',
        component: CreateLetterComponent,
      },
      {
        path: 'inbox',
        component: BoxListComponent,
        data: {
          url: 'inbox'
        },
      },
      {
        path: 'draft-letters',
        component: BoxListComponent,
        data: {
          url: 'draft-letters',
        },
      },
      {
        path: 'sent-letters',
        data: {
          url: 'sent-letters',
        },
        component: BoxListComponent,
      },
      {
        path: 'inbox/:userId',
        data: {
          url: 'inbox/',
        },
        component: LetterComponent,
      },
      {
        path: 'sent-letters/:userId',
        data: {
          url: '/sent-letters/',
        },
        component: LetterComponent,
      },
      {
        path: 'draft-letters/:userId',
        data: {
          url: 'draft-letters/',
        },
        component: LetterComponent,
      },
      {
        path: 'spam-letters/:userId',
        data: {
          url: 'spam-letters/',
        },
        component: LetterComponent,
      },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    BirthdatePipe,
    BoxComponent,
    LoginComponent,
    BoxListComponent,
    LetterComponent,
    NavigationComponent,
    NameValidatorDirective,
    EmailValidatorDirective,
    SexValidatorDirective,
    BirthdatValidatorDirective,
    SearchPipe,
    CreateLetterComponent,
    UserCreateComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    LettersService,
    AuthGuard,
    AuthenticationService,
    UserLoginService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
