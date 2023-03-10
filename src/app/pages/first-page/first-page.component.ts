import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  constructor(private router: Router) { }

  navigateToNextPage() {
    this.router.navigate(['second']);
  }
}
