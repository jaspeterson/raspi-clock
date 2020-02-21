import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainFaceComponent } from "./components/main-face/main-face.component";
import { TimerFaceComponent } from "./components/timer-face/timer-face.component";
import { AlarmFaceComponent } from "./components/alarm-face/alarm-face.component";

const routes: Routes = [
  { path: "", component: MainFaceComponent },
  { path: "timer", component: TimerFaceComponent },
  { path: "alarm", component: AlarmFaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
