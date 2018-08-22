import {Component} from '@angular/core';
import {Campground} from '../../model/campground';
import {CampNewService} from '../../service/campnew.service';
import {Router} from '@angular/router';

@Component(
    {
        selector:'component-new',
        templateUrl:'./campgroundnew.component.html'
    }
)

export class CampgroundNewComponent
{
    private currentUser:String;
    private camp:Campground= new Campground();
    constructor(private newCampService:CampNewService,private router:Router){
        this.currentUser=localStorage.getItem("currentUserName");
    }

    onSubmit()
    {
        alert("trying to create new camp");
        this.newCampService.createNewCamp(this.camp).subscribe(
            campCreated=>{alert("created"+campCreated);
            this.router.navigate(["/campgrounds"]);    
        },
            error=> console.log(error)
        );
        
    }
}