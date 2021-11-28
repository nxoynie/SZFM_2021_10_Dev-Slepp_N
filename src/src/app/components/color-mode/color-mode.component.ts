import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../material-module';

@Component({
  selector: 'app-color-mode',
  templateUrl: './color-mode.component.html',
  styleUrls: ['./color-mode.component.scss'],
})
export class ColorModeComponent implements OnInit {

  // is the theme already dark
  dark = false

  constructor() { }

  ngOnInit() {
      // check if the theme is already dark, if it is, we check the darkmode toggle by default
      if(document.body.getAttribute('color-theme') == 'dark')
          this.dark = true
  }

  change(event) {
    
    if(event.detail.checked) {
        document.body.setAttribute('color-theme', 'dark');
    }
    else {
        document.body.setAttribute('color-theme', 'light');
    }

  }

}