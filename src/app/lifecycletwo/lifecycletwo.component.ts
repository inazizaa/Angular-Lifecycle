import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycletwo',
  templateUrl: './lifecycletwo.component.html',
  styleUrls: ['./lifecycletwo.component.css']
})
export class LifecycletwoComponent implements OnInit {
  @Input()
  datanya: number;

  constructor() { }

  ngOnChanges() {
    console.log("ngOnChanges" + ": " + this.datanya);
  }
  ngOnInit() {
  }
  ngDoCheck() {
    console.log("ngDoCheck two")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit two");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked two");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit two");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked two");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
