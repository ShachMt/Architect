import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  toggleMenu(): void {
    const navMenu = document.querySelector('.nav-menu') as HTMLElement | null;
    const hamburger = document.querySelector('.hamburger') as HTMLElement | null;

    if (navMenu && hamburger) {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    } else {
      console.error('Unable to find .nav-menu or .hamburger elements');
    }
  }
}

