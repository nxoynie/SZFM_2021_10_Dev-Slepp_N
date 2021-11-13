import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.scss'],
})
export class FirstPartComponent implements OnInit {

  constructor(private router: Router) {}

  done =  false

  q1 = {
    question : 'Mi az a Bitcoin?',
    answers: [
      'A Bitcoin az első kriptovaluta amit 2006-ban készített egy csapat anonymous informatikus ,mint egy alternatívát a papírpénzre(illetve apróra természetesen)',
      'A Bitcoin egy centralizált valuta ami a technológiai blokkláncra hagyatkozik ,hogy lehetővé tegye a peer-to-peer tranzakciókat az interneten.', 
      'A Bitcoin egy decentralizált digitális valuta ami peer-to-peer küldhető akármilyen közvetítő segítsége nélkül.', 
      'A Bitcoin egy kriptovaluta amit először 2006-ban indítottak ,mint egy informatikai kisírletet ,hogy leteszteljék a technológiai blokklánc alkalmazását.'
    ]
  }

  q2 = {
    question : 'Mi az a Bitcoin Node?',
    answers: [
      'Egy számítógép ami korábban csatlakozott az egész Bitcoin hálózathoz és csak egy referenciaként szolgál a tranzakció történetről.', 
      'Egy számítógép ami on-chain analitikát végez a Bitcoin-ról, hogy segítse megjósolni a jövőbeli árzuhanást/árnövekedést.', 
      'Egy számítógép a Bitcoin peer-to-peer hálózatban ami hostol és szinkronizál egy Bitcoin blocklánc másolatot.', 
      'Egy számítógép amit arra használtam ,hogy küldjenek vagy fogadjanak Bitcoin-t kriptovaluta adásvétel által.'
    ]
  }

  q3 = {
    question : 'Mi az a Bitcoin Blokklánc?',
    answers: [
      'Egy centralizált, digitális adatbázis amely tartalmaz egy teljes listát a Bitcoin bányászok által megszerzett blokk jutalmakról.', 
      'Egy digitális főkönyv ami tartalmazza a Bitcoin tranzakciók és azokhoz tartozó emberek identitásának teljes történetét.', 
      'Egy centralizált, digitális adatbázis a Bitcoin tranzakciókról ami védve van complex kriptografikus hash függvények által.', 
      'Egy publikus, nem megváltoztatható, digitális főkönyv ami duplikált és elosztott a Bitcoin hálózatban részvevő minden számítógép között.'
    ]
  }

  q4 = {
    question : 'Mi az a Bitcoin bányászat?',
    answers: [
      'Az a folyamat amely által az adat korábbi tranzakció blokkokból hashelt és arra használt ,hogy vegyenek vagy adjanak el Bitcoint.', 
      'Az a folyamat amit arra használnak ,hogy csökkentsék a Bitcoin tőzsdéjét.', 
      'Az a Bitcoin feldolgozási akció ahol feljegyzik őket a Bitcoin főkönyvbe.', 
      'Az a folyamat ani megakadályozza az új funckiók implementálást a Bitcoin protokollba.'
    ]
  }

  q5 = {
    question : 'Mi volt az első termék, melyet Bitcoin-nal fizettek ki 2010-ben?',
    answers: [
      'kard', 
      'pizza', 
      'koncertjegy', 
      'számítógépes játék'
    ]
  }

  result = {
    elso_ertek: 0,
    masodik_ertek: 0,
    harmadik_ertek: 0,
    negyedik_ertek: 0,
    otodik_ertek: 0
  }

  ngOnInit() {}

  onChange(event: MatSelectionListChange, index) {
    console.log(event.source._value[0], index)
    let val = event.source._value[0]
    
    switch (index) {
      case 1:
        this.result.elso_ertek = this.q1.answers.findIndex(ans => ans == val) + 1
        break;
      case 2:
        this.result.masodik_ertek = this.q2.answers.findIndex(ans => ans == val) + 1
        break;
      case 3:
        this.result.harmadik_ertek = this.q3.answers.findIndex(ans => ans == val) + 1
        break;
      case 4:
        this.result.negyedik_ertek = this.q4.answers.findIndex(ans => ans == val) + 1
        break;
      case 5:
        this.result.otodik_ertek = this.q5.answers.findIndex(ans => ans == val) + 1
        break;
    
      default:
        break;
    }
  }

  onSubmit() {
    console.log(this.result)
    this.done = true
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
