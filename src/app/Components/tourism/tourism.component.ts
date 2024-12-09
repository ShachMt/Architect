import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss']
})
export class TourismComponent implements OnInit {
  tourism="Tourism & Hospitality"
  constructor() { }

  ngOnInit(): void {
  }

}
