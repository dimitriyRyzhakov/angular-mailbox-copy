import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Iusers} from "../interfaces/iusers";
import {Iuser} from "../interfaces/iuser";


@Injectable()
export class UsersService {


  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<Iusers[]> {
    return this._http.get('http://test-api.javascript.ru/v1/dimitriyryzhakov/users');
  }

  getOneUser(_id): Observable<Iuser> {
    return this._http.get('http://test-api.javascript.ru/v1/dimitriyryzhakov/users/' + _id);
  }

  postUsers(dataUrl): Observable<Iusers[]> {
    return this._http.post('http://test-api.javascript.ru/v1/dimitriyryzhakov/', dataUrl);
  }

  renameUser(id, body): Observable<Iuser> {
    return this._http.patch(`http://test-api.javascript.ru/v1/dimitriyryzhakov/users/${id}`, body);
  }

  removeUser(_id) {
    return this._http.delete('http://test-api.javascript.ru/v1/dimitriyryzhakov/users/' +  _id + '?delay=2000',
        { responseType: 'text'});
  }

}
