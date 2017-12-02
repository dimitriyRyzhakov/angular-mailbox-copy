import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iletters} from "../iletters";
import {Iletter} from "../iletter";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LettersService {

  private url = `https://test-api.javascript.ru/v1/`;

  constructor(private _http: HttpClient) {
  }

  getLetters(categoryId): Observable<Iletters[]> {
    return this._http.get(`${this.url}${categoryId}/letters`);
  }

  getOneLetter(categoryId, postId): Observable<Iletter> {
    return this._http.get(`${this.url}${categoryId}/letters/${postId}`);
  }

  postLetter(letter): Observable<Iletters[]> {
    return this._http.post(`${this.url}/sent-letters`, letter);
  }

  deleteLetter(categoryId, postId) {
    return this._http.delete(`${this.url}${categoryId}/letters/${postId}`,
      { responseType: 'text'});
  }

}

