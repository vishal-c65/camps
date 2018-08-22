import {Component} from '@angular/core';
import { LoginService } from '../service/login.service';


@Component
(
{
selector:'app-header',
templateUrl: './header.component.html'
}
)

export class HeaderComponent
{
    private currentUser:String;

    constructor(private loginService:LoginService){
        this.currentUser=localStorage.getItem("currentUserName");
        // alert("current user in header "+this.currentUser);
    };

    onClick()
    {
        if(this.loginService.checkLogin())
        {
            
            this.loginService.logout().subscribe(data=>console.log("user logged out succesfully"));
        }
    }
}
