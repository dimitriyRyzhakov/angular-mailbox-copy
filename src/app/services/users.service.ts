import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Iusers} from "../interfaces/iusers";
import {Iuser} from "../interfaces/iuser";


@Injectable()
export class UsersService {

  private url = `https://test-api.javascript.ru/v1/dimitriyryzhakov/users/`;

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<Iusers[]> {
    return this._http.get(this.url);
  }

  getOneUser(_id): Observable<Iuser> {
    return this._http.get(this.url + _id);
  }

  postUsers(dataUrl): Observable<Iusers[]> {
    return this._http.post('https://test-api.javascript.ru/v1/dimitriyryzhakov/', dataUrl);
  }

  renameUser(id, body): Observable<Iuser> {
    return this._http.patch(this.url + id, body);
  }

  removeUser(_id) {
    return this._http.delete(this.url +  _id,
        { responseType: 'text'});
  }

}
