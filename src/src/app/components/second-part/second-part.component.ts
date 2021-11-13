import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.scss'],
})
export class SecondPartComponent implements OnInit {
  
  result = {
    predikcios_ertek: 4
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.result)
    this.dataService.setPartTwo(this.result)
  }

}
