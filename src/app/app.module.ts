import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { TformComponent } from './tform/tform.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HomeComponent,
    TformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
