import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iletters} from "../iletters";
import {Iletter} from "../iletter";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LettersService {

  constructor(private _http: HttpClient) {
  }

  getLetters(categoryId): Observable<Iletters[]> {
    return this._http.get(`http://test-api.javascript.ru/v1/${categoryId}/letters`);
  }

  getOneLetter(categoryId, postId): Observable<Iletter> {
    return this._http.get(`http://test-api.javascript.ru/v1/${categoryId}/letters/${postId}`);
  }

  postLetter(letter): Observable<Iletters[]> {
    return this._http.post('http://test-api.javascript.ru/v1/sent-letters', letter);
  }

  deleteLetter(categoryId, postId) {
    return this._http.delete(`http://test-api.javascript.ru/v1/${categoryId}/letters/${postId}`,
      { responseType: 'text'});
  }

}

