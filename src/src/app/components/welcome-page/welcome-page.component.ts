import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
    welcome = true
    constructor(private router: Router) { }

    ngOnInit() {}

    goNext() {
        this.welcome = false
        setTimeout(() => 
        {
          this.router.navigate(['/part-one'], { replaceUrl: true });
        },
        3000)
    }
}
