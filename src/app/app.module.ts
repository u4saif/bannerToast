import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerToastModule } from 'projects/banner-toast/src/public-api';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerToastModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
