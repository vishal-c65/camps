//This service should check if request is authenticated. If not then send error not authenticated.
//If user is logged in respond with success, show new camp page.

import {Injectable} from '@angular/core';
// import {Observable}     from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import {User} from '../model/user';

@Injectable()

export class LoginService
{

    constructor (private http:HttpClient){};

    loginUser(user:User)
    {
        let loginUrl='http://localhost:5555/login';
        // let headers1=  new Headers({'Content-Type':'application/json'});
        return this.http.post<User>(loginUrl,user);
    }

    logout()
    {
        localStorage.setItem("currentUserName","");
        let logoutUrl='http://localhost:5555/logout';
        return this.http.get(logoutUrl);
    }

    checkLogin()
    {
        if(localStorage.getItem("currentUserName")!=null && localStorage.getItem("currentUserName")!="")
        {
        return true;
        }
        else
        {return false;
        }
        
    }
}