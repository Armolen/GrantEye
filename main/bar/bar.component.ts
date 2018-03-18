import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {

  totalTable: number;

  dane = [
    { ilosc : 2 },
    { ilosc : 3 },
    { ilosc : 4},
    { ilosc : 7 }
  ];
  private testy: string;
  constructor() { }

  ngOnInit() {
    this.countTableAll();
  }

  countTableAll(): string {
  this.testy = this.dane
    .map((dana) => dana.ilosc)
    .reduce((prev, next ) => prev.toString() + next.toString());

  return testy;
}

}
