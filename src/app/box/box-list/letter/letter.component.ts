import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LettersService} from "../../../services/letters.service";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.sass']
})

export class LetterComponent implements OnInit {

  public urlRoute: string;
  public oneLetterShow: any = [];
  public loader: boolean = false;
  public subject: boolean = false;


  constructor(private router: ActivatedRoute,
              private rout: Router,
              private lettersService: LettersService) {
    this.router.data.subscribe(data => {
      this.loader = true;
      this.urlRoute = data.url;
    });
    this.router.params.subscribe(params => {
      return this.oneLetterShow = params;
    });
  }

  removeLetter(currentId) {
    this.lettersService.deleteLetter(this.urlRoute, currentId).subscribe(() => {
    }, err => {
      console.log(`Error ${err.status} ${err.statusText}`);
    }, () => {
      this.subject = true;
      console.log('Done');
      this.rout.navigate([`/box/${this.urlRoute}`]);
    })
  }


  ngOnInit() {
    this.lettersService.getOneLetter(this.urlRoute, this.oneLetterShow.userId).subscribe(
      letter => {
        this.oneLetterShow = letter;

        this.loader = false;
      }
    );
  }
}
