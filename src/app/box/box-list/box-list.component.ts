import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {
  ActivatedRoute, Event as RouterEvent,

} from "@angular/router";
import {LettersService} from "../../services/letters.service";

@Component({
  selector: 'app-box-item',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.sass'],


})
export class BoxListComponent implements OnInit, OnChanges {

  public urlRoute: string;
  public loader = false;
  public urlResponse;
  public subject: boolean = false;
  public lettersIdlist: any = [];
  public searchText;



  constructor(private router: ActivatedRoute, private lettersService: LettersService) {
    this.router.data.subscribe(data => {
      this.urlRoute = data.url;
      this.loader = true;
    });
  }


  public filterLetters(text: any): void {
    this.searchText = text;
  }

  getLetterList() {
    this.lettersService.getLetters(this.urlRoute).subscribe(response => {
        this.urlResponse = response;
        this.loader = false;
      }
    );
  }

  addLetterforRemove(letterId, event) {
    if (event.target.checked) {
      if (!this.lettersIdlist.includes(letterId)) {
        this.lettersIdlist = [...this.lettersIdlist, ...letterId._id];
      }
    } else {
      this.lettersIdlist = this.lettersIdlist.filter(letterId => letterId._id !== letterId);
    }

  }

  deleteLetter() {
    this.lettersIdlist.forEach((currentId) => {

      this.lettersService.deleteLetter(this.urlRoute, currentId).subscribe(() => {
      }, err => {
        console.log(`Error ${err.status} ${err.statusText}`);
      }, () => {

        this.subject = true;
        this.lettersIdlist = [];
        this.getLetterList();
      })
    });

  }


  ngOnInit() {
    this.loader = true;

    this.getLetterList();


  }

  ngOnChanges() {

  }

}
