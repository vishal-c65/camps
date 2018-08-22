import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component'; 
import { CampgroundComponent } from './components/campgrounds/campground.component';
import { CampgroundNewComponent } from './components/campgrounds/campgroundnew.component';
import {RegisterComponent } from './components/register.component';
import {LoginComponent } from './components/login.component'; 

import {CampNewService} from './service/campnew.service';
import {RegisterService} from './service/register.service';
import {LoginService} from './service/login.service';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CustomInterceptor} from './service/interceptor.camp';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

// import {LocationStrategy,HashLocationStrategy} from '@angular/common'
// import { BrowserXhr } from '@angular/http';
// import {CustExtBrowserXhr} from './components/cust-ext-browser-xhr';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CampgroundComponent,
    CampgroundNewComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [CampNewService,RegisterService,LoginService,
    {provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
