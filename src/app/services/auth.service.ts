import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { catchError, map, tap } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.url
  private _user!: User;

  get user(){
    return {...this._user};
  }

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string){

    const url = `${this.baseUrl}login`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url,body)
      .pipe(
        tap(resp => {
          if(resp.ok === true){
            localStorage.setItem('token', resp.token!);
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        map(resp => resp.ok ),
        catchError(err => of(err.error.msg))
      );
  }

  register(name: string, email: string, password: string){
    const url = `${this.baseUrl}register`;
    const body = {name, email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if(resp.ok === true){
            localStorage.setItem('token', resp.token!);
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validateToke(){

    const url = `${this.baseUrl}renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, {headers})
            .pipe(
              tap(resp => {
                localStorage.setItem('token', resp.token!);
                this._user = {
                  name: resp.name!,
                  uid: resp.uid!
                }
              }),
              map(resp => {
                return resp;
              }),
              catchError(err => of(false))
            )
  }

  logout(){
    localStorage.removeItem('token');
  }


}
