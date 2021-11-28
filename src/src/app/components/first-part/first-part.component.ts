import { DataService } from './../../services/data-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.scss'],
})
export class FirstPartComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) {}

  done =  false

  result = {
    elso_ertek: 0,
    masodik_ertek: 0,
    harmadik_ertek: 0,
    negyedik_ertek: 0,
    otodik_ertek: 0
  }

  questions

  q1 = {}
  q2 = {}
  q3 = {}
  q4 = {}
  q5 = {}

  type = ''

  ngOnInit() {
    this.questions = this.dataService.getData('part-one')
    this.type = this.dataService.type

    this.q1 = this.questions.q1
    this.q2 = this.questions.q2
    this.q3 = this.questions.q3
    this.q4 = this.questions.q4
    this.q5 = this.questions.q5

  }

  onChange(event: MatSelectionListChange, index) {
    let val = event.source._value[0]
    
    switch (index) {
      case 1:
        this.result.elso_ertek = this.q1['answers'].findIndex(ans => ans == val) + 1
        break;
      case 2:
        this.result.masodik_ertek = this.q2['answers'].findIndex(ans => ans == val) + 1
        break;
      case 3:
        this.result.harmadik_ertek = this.q3['answers'].findIndex(ans => ans == val) + 1
        break;
      case 4:
        this.result.negyedik_ertek = this.q4['answers'].findIndex(ans => ans == val) + 1
        break;
      case 5:
        this.result.otodik_ertek = this.q5['answers'].findIndex(ans => ans == val) + 1
        break;
    
      default:
        break;
    }
  }

  onSubmit() {
    console.log(this.result)
    this.done = true
    this.dataService.setPartOne(this.result)
    setTimeout(() => 
    {
      this.router.navigate(['/part-two'], { replaceUrl: true });
    },
    1500)
  }

  all_answered() {
    if(this.result.elso_ertek && this.result.masodik_ertek && this.result.harmadik_ertek && this.result.negyedik_ertek && this.result.otodik_ertek) 
      return true
    return false
  }
}
