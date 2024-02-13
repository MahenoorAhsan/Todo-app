import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TodoDataService } from './service/data/todo-data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HttpInterceptorsService } from './service/http/http-interceptors.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),TodoDataService,importProvidersFrom(HttpClientModule),DatePipe,
    {provide : HTTP_INTERCEPTORS,
    useClass : HttpInterceptorsService,
    multi : true}
  ]
};
