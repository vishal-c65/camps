import {Component} from '@angular/core';
import {User} from '../model/user';
import {RegisterService} from '../service/register.service';

@Component
(
    {
        selector:'register-camp',
        templateUrl: './register.component.html'
    }
)

export class RegisterComponent
{
    newUser:User = new User();
    private currentUserName;

    constructor(private register:RegisterService){
        this.currentUserName=localStorage.getItem("currentUserName");
    }

    onSubmit()
    {
        this.register.registerUser(this.newUser).subscribe(
            userData=>{
                this.newUser=new User();
            },
            error=>console.log(error)
        );

    }
}