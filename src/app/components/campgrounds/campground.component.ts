import { Component } from '@angular/core';
import { CampNewService } from '../../service/campnew.service';
import { Router } from '@angular/router';
import { Campground } from '../../model/campground';

@Component
    (
    {
        selector: 'campground',
        templateUrl: './campground.component.html'
    }
    )

export class CampgroundComponent {
    campNewService: CampNewService;
    public isLoggedIn: String;
    camps: Campground[];
    constructor(private newCamp: CampNewService, private router: Router) {
        this.campNewService = newCamp;
        this.newCamps();
    }

    newCampPage() {

        console.log("checking for new camp");
        //alert("neewww!!");

        this.campNewService.newCamp().subscribe(
            result => {

                this.isLoggedIn = JSON.stringify(result);

                console.log(result);
                if (this.isLoggedIn == "true") {

                    this.router.navigate(['/campgrounds/new']);
                }
                else {
                    this.router.navigate(['/login']);
                }
            },
            error => console.log(error)
        );


    }

    newCamps() {

        //    console.log("checking for new camp");
        // alert("list of camps");

        this.campNewService.listCamps().subscribe(
            result => {
                // alert(result);
                //this.isLoggedIn=JSON.stringify(result);
                this.camps = result;
                // alert(this.camps);

            },
            error => console.log(error)
        );
    }



}