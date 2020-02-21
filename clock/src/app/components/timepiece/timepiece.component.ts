import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-timepiece",
  templateUrl: "./timepiece.component.html",
  styleUrls: ["./timepiece.component.scss"]
})
export class TimepieceComponent implements OnInit {
  time: Date = new Date();
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
