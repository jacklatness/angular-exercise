import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {

  constructor() { }
  thisYear = 2022;

  years = [2020, 2021, 2022];

  ngOnInit(): void {
  }

}