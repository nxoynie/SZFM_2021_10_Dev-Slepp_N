import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../material-module';

@Component({
  selector: 'app-color-mode',
  templateUrl: './color-mode.component.html',
  styleUrls: ['./color-mode.component.scss'],
})
export class ColorModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  change(event) {
    
    if(event.detail.checked) {
        document.body.setAttribute('color-theme', 'dark');
    }
    else {
        document.body.setAttribute('color-theme', 'light');
    }

  }

}