import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { RdisplayComponent } from './rdisplay/rdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HomeComponent,
    TformComponent,
    RformComponent,
    RdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
