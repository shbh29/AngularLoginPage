import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { constants } from 'os';

const urls : Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'signin',
    component : LoginFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(urls)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
