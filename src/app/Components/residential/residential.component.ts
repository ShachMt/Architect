import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss']
})
/*
Name of the project: The Nest Hotel
Location: Hahula valley
Size: 6000 sq. m.
Category: Architectural planing total design

  public id?: number,
        public idCategory?: Number,
        public nameOfTheProject?: string,
        public location?: string,
        public size?: string,
        public aboutTheProject?: string,
*/
export class ResidentialComponent implements OnInit {
  residential='Residential';
  constructor(private router: Router) { }
  navigateToProject(text: string) {
    this.router.navigate(['/project', text]);
  }
  ngOnInit(): void {
  }

}
