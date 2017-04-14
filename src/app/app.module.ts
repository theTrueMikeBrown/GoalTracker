import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAjHEX9fWG2uQQUMtdaNqekPpt87vMOgtI",
    authDomain: "lftigoalapp.firebaseapp.com",
    databaseURL: "https://lftigoalapp.firebaseio.com",
    storageBucket: "lftigoalapp.appspot.com",
    messagingSenderId: "487596075413"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
