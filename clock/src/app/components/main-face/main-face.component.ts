import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-face",
  templateUrl: "./main-face.component.html",
  styleUrls: ["./main-face.component.scss"]
})
export class MainFaceComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      "timer-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/timer.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "alarm-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/alarm.svg")
    );
  }

  ngOnInit(): void {}

  timerFace() {
    this.router.navigate(["/timer"]);
  }

  alarmFace() {
    this.router.navigate(["/alarm"]);
  }
}
