import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFaceComponent } from './components/main-face/main-face.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepieceComponent } from './components/timepiece/timepiece.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFaceComponent,
    TimepieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
