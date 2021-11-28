import { Router } from '@angular/router';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.scss'],
})
export class SecondPartComponent implements OnInit {
  
    result = {
      predikcios_ertek: 0
    }

    constructor(private elRef: ElementRef, private dataService: DataService, private router: Router) { }

    questions
    
    type = ''

    ngOnInit() {
      this.type = this.dataService.type
      this.questions = this.dataService.getData('part-two')
      console.log(this.questions)
    }

    value = 0

    value_forma1_1 = 0
    value_forma1_2 = 0

    done =  false

    q_pre = {}

    onSubmit() {
        if(this.type == 'forma1') {
          this.value = this.value_forma1_1 // csak az egyik valaszt mentjuk el egyelore!
        }
        this.result.predikcios_ertek = this.value
        console.log(this.result)
        this.done = true
        this.dataService.setPartTwo(this.result)
        setTimeout(() => 
        {
          this.router.navigate(['/thank-you'], { replaceUrl: true });
        },
        1500)

    }
    answered() {
        if(this.result.predikcios_ertek) 
          return true
        return false
    }
  }
