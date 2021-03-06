import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../services/users.service";
import {LettersService} from "../../../services/letters.service";
import {emailValidator} from "../../../reactive-validators/email-validator";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-letter',
  templateUrl: './create-letter.component.html',
  styleUrls: ['./create-letter.component.sass'],
})
export class CreateLetterComponent implements OnInit, OnChanges {

  public FormInvalid: boolean = false;
  public addLetterForm: FormGroup;
  public letter: Array<any> = [];
  public letterSent: boolean = false;
  public lettersWrapp: object;
  public createUserList;
  public query: string = '';
  public userEmailList: Array<any> = [];
  public elementRef;
  public AdduserEmail = [];
  public wrapperdataUser;
  public closeResult: string;

  @ViewChild('popup')
  popup: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private lettersService: LettersService,
              private usersService: UsersService,
              private modalService: NgbModal,
              myElement: ElementRef) {
    this.elementRef = myElement;

  }

  open(popup) {
    console.log(popup);
    this.modalService.open(popup).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  mongoObjectId() {
    let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
        return (Math.random() * 16 | 0).toString(16);
      }).toLowerCase();
  };

  // user email autocomplete
  filter() {
    if (this.query !== "") {
      this.userEmailList = this.createUserList.filter((el) => {
        return el.email.toLowerCase().includes(this.query.toLowerCase());
      });
    } else {
      this.userEmailList = [];
    }
  }

  // select user email from autocomplete
  selectFromAutocomplete(item) {
    this.query = item;
    this.userEmailList = [];
  }

  postNewEmailUser(data) {
    this.usersService.postUsers(data).subscribe(() => {
    }, err => {
      console.log(`Error ${err.status} ${err.statusText}`);
    }, () => {
      console.log('Done');
    });
  }

  addNewUSerEmail(form) {
    this.AdduserEmail = this.createUserList.filter(function (email) {
      return  form.controls.to.value ===  email.email;
    });

    if (this.AdduserEmail.length === 0) {
      this.AdduserEmail.push({
        email: form.controls.to.value,
        fullName: 'No name',
      });

      this.wrapperdataUser = {
        users: this.AdduserEmail
      };

      this.postNewEmailUser(this.wrapperdataUser);

    }
  }

  sendLetter(form) {

    if (form.valid) {
      this.letter = [...this.letter, form.value];
      this.letter[0].mailbox = this.mongoObjectId();
      this.FormInvalid = false;
      this.addNewUSerEmail(form);
      this.addLetterForm.reset();
      this.lettersWrapp = {
        letters: this.letter,
      };

      this.lettersService.postLetter(this.lettersWrapp).subscribe(() => {

      }, err => {
        console.log(`Error ${err.status} ${err.statusText}`);
      }, () => {
        console.log('Done');
        this.open(this.popup);
        this.letter = [];
        this.AdduserEmail = [];
      });
    } else {
      this.FormInvalid = true;
    }
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(userslist => {
      this.createUserList = userslist;
    });

    this.addLetterForm = this.formBuilder.group({
      to: [null, [emailValidator, Validators.required]],
      subject: [null, [Validators.required]],
      body: [null, [Validators.required]],
      mailbox: [this.mongoObjectId()],
    });
  }

  ngOnChanges() {

  }

}
