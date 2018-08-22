//This service should check if request is authenticated. If not then send error not authenticated.
//If user is logged in respond with success, show new camp page.

import {Injectable} from '@angular/core';
// import {Observable}     from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Campground} from '../model/campground';


@Injectable()

export class CampNewService
{

    constructor (private http:HttpClient){};
    
    newCamp()
    {
        let newCampUrl = 'http://localhost:5555/campgrounds/new';
      
        return this.http.get<String>(newCampUrl);
    }

    listCamps()
    {
        let newCampUrl = 'http://localhost:5555/campgrounds/';
      
        return this.http.get<Campground[]>(newCampUrl);
    }

    createNewCamp(camp:Campground)
    {
        let newCampUrl = 'http://localhost:5555/campgrounds/';
      
        return this.http.post<Campground>(newCampUrl,camp);
    }

}