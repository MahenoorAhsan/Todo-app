import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
export const routes: Routes = [
    {path :'' , component : LoginComponent},
    {path : 'login', component : LoginComponent},
    {path : 'welcome/:name' , component : WelcomeComponent},
    {path : 'todos' , component : ListTodosComponent},
    {path : '**', component : ErrorComponent}

];