import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainFaceComponent } from "./components/main-face/main-face.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimepieceComponent } from "./components/timepiece/timepiece.component";

import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TimerFaceComponent } from './components/timer-face/timer-face.component';
import { AlarmFaceComponent } from './components/alarm-face/alarm-face.component';

@NgModule({
  declarations: [AppComponent, MainFaceComponent, TimepieceComponent, TimerFaceComponent, AlarmFaceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
