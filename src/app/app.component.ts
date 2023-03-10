import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rx-test';
  constructor(private router: Router) { }

  navigateTo(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
