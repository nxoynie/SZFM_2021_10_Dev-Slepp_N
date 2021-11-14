import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
      console.log(this.dataService.result)
    }

    value = 0

    done =  false

    q_pre={
      question: 'Jelenleg egy darab Bitcoin egyenértékű 20 794 039,98 magyar forrinttal, mit gondolsz, 10 éven belül lehetséges-e ,hogy munkahelyen Bitcoin-ba kapják az emberek a fizetést?',
      answers:[
        'Nem valószínű', 'Talán', 'Neutrális' ,'Elképzelhető', 'Elég sok esély látok rá'
      ]
    }

    onSubmit() {
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
