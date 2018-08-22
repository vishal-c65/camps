//This service should check if request is authenticated. If not then send error not authenticated.
//If user is logged in respond with success, show new camp page.

import {Injectable} from '@angular/core';
// import {Observable}     from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {User} from '../model/user';
import { Observable } from 'rxjs';

@Injectable()

export class RegisterService
{

    constructor (private http:HttpClient){};

    registerUser(user:User):Observable<User>
    {
        let registerUrl='http://localhost:5555/register';
        // let headers1=  new Headers({'Content-Type':'application/json'});
        return this.http.post<User>(registerUrl,user);
    }
}