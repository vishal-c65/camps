import {Component} from '@angular/core';
import { User } from '../model/user';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component(
    {
        selector: 'logn-camp',
        templateUrl:'./login.component.html'
    }
)

export class LoginComponent
{

    private loggedUser:User= new User();
    private currentUserName;

    constructor(private loginService:LoginService,private router:Router,private http:HttpClient){
        this.currentUserName=localStorage.getItem("currentUserName");
    }

    onSubmit()
    {
        //alert(this.loggedUser+"user in submit");
        this.loginService.loginUser(this.loggedUser).subscribe(
            user=>{ 
                //alert("user logged in"+JSON.stringify(user.username));
                // this.loggedUser=JSON.parse(JSON.stringify(user))._body;
                 this.currentUserName=user.username;
                // alert(this.currentUserName+"logged in");
                 localStorage.setItem("currentUserName",this.currentUserName);
                
        },
            error=>{console.log(error);
            alert(error);
            }
            
        );
        this.router.navigate(['/campgrounds/new']);
    }

    
}