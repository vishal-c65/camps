import {Injectable} from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent}     from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // request = request.clone({
        //     withCredentials: true
            
        // });
        request = request.clone({
            withCredentials: true,
            setHeaders: {
                'Content-Type': 'application/json',

                'Access-Control-Allow-Origin' : 'localhost:5555',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS,PUT',
            }
          });

        return next.handle(request);
    }
}