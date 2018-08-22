import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LandingComponent} from './components/landing.component';
import { CampgroundComponent } from './components/campgrounds/campground.component';
import { CampgroundNewComponent } from './components/campgrounds/campgroundnew.component';
import {RegisterComponent} from './components/register.component';
import {LoginComponent} from './components/login.component';

const appRoutes:Routes =
[
{
    path:'',
    redirectTo:'/landing',
    pathMatch:'full'
},
{
    path:'landing',
    component: LandingComponent
}
,
{
    path:'campgrounds',
    component:CampgroundComponent
},
{
    path:'campgrounds/new',
    component:CampgroundNewComponent
},
{
    path:'register',
    component:RegisterComponent
},
{
    path:'login',
    component:LoginComponent
}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);