import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
    welcome = true
    constructor(private dataService: DataService, private router: Router) { }

    type: string = ''

    ngOnInit() {}

    goNext() {
        this.dataService.setType(this.type)
        this.welcome = false
        setTimeout(() => 
        {
          this.router.navigate(['/part-one'], { replaceUrl: true });
        },
        3000)
    }
}
