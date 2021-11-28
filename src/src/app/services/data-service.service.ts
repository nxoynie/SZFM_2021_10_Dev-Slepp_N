import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URL
  private api_url = "http://localhost/api/interface.php"

  result = {
    elso_ertek: 0,
    masodik_ertek: 0,
    harmadik_ertek: 0,
    negyedik_ertek: 0,
    otodik_ertek: 0,
    predikcios_ertek: 0
  }

  constructor(private http: HttpClient) { }

  type: string = ''
  // set the type of questionnaire on the welcome page
  setType(type: string) {
    this.type = type
  }

  setPartOne(result_part_one) {
    this.result.elso_ertek = result_part_one.elso_ertek
    this.result.masodik_ertek = result_part_one.masodik_ertek
    this.result.harmadik_ertek = result_part_one.harmadik_ertek
    this.result.negyedik_ertek = result_part_one.negyedik_ertek
    this.result.otodik_ertek = result_part_one.otodik_ertek
  }

  setPartTwo(result_part_two) {
    this.result.predikcios_ertek = result_part_two.predikcios_ertek
    this.sendData(this.result)
  }

  sendData(result) {
    this.http.post(this.api_url, JSON.stringify(result), {  
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }}
    ).subscribe(response => console.log(response))
  }

  getData(part: string) {
    if(this.type == 'bitcoin') {
      if(part == 'part-one') {
        return this.bitcoin_questions.q_part1
      }
      else {
        return this.bitcoin_questions.q_pre
      }
    }
    if(this.type == 'forma1') {
      if(part == 'part-one') {
        return this.forma1_questions.q_part1
      }
      else {
        return this.forma1_questions.q_pre
      }
    }
  }

  // bitcoin questions

  bitcoin_questions = {
    q_part1: {
      q1: {
        question : 'Mi az a Bitcoin?',
        answers: [
          'A Bitcoin az első kriptovaluta amit 2006-ban készített egy csapat anonymous informatikus ,mint egy alternatívát a papírpénzre(illetve apróra természetesen)',
          'A Bitcoin egy centralizált valuta ami a technológiai blokkláncra hagyatkozik ,hogy lehetővé tegye a peer-to-peer tranzakciókat az interneten.', 
          'A Bitcoin egy decentralizált digitális valuta ami peer-to-peer küldhető akármilyen közvetítő segítsége nélkül.', 
          'A Bitcoin egy kriptovaluta amit először 2006-ban indítottak ,mint egy informatikai kisírletet ,hogy leteszteljék a technológiai blokklánc alkalmazását.'
        ]
      },
    
      q2: {
        question : 'Mi az a Bitcoin Node?',
        answers: [
          'Egy számítógép ami korábban csatlakozott az egész Bitcoin hálózathoz és csak egy referenciaként szolgál a tranzakció történetről.', 
          'Egy számítógép ami on-chain analitikát végez a Bitcoin-ról, hogy segítse megjósolni a jövőbeli árzuhanást/árnövekedést.', 
          'Egy számítógép a Bitcoin peer-to-peer hálózatban ami hostol és szinkronizál egy Bitcoin blocklánc másolatot.', 
          'Egy számítógép amit arra használtam ,hogy küldjenek vagy fogadjanak Bitcoin-t kriptovaluta adásvétel által.'
        ]
      },
    
      q3: {
        question : 'Mi az a Bitcoin Blokklánc?',
        answers: [
          'Egy centralizált, digitális adatbázis amely tartalmaz egy teljes listát a Bitcoin bányászok által megszerzett blokk jutalmakról.', 
          'Egy digitális főkönyv ami tartalmazza a Bitcoin tranzakciók és azokhoz tartozó emberek identitásának teljes történetét.', 
          'Egy centralizált, digitális adatbázis a Bitcoin tranzakciókról ami védve van complex kriptografikus hash függvények által.', 
          'Egy publikus, nem megváltoztatható, digitális főkönyv ami duplikált és elosztott a Bitcoin hálózatban részvevő minden számítógép között.'
        ]
      },
    
      q4: {
        question : 'Mi az a Bitcoin bányászat?',
        answers: [
          'Az a folyamat amely által az adat korábbi tranzakció blokkokból hashelt és arra használt ,hogy vegyenek vagy adjanak el Bitcoint.', 
          'Az a folyamat amit arra használnak ,hogy csökkentsék a Bitcoin tőzsdéjét.', 
          'Az a Bitcoin feldolgozási akció ahol feljegyzik őket a Bitcoin főkönyvbe.', 
          'Az a folyamat ani megakadályozza az új funckiók implementálást a Bitcoin protokollba.'
        ]
      },
    
      q5: {
        question : 'Mi volt az első termék, melyet Bitcoin-nal fizettek ki 2010-ben?',
        answers: [
          'kard', 
          'pizza', 
          'koncertjegy', 
          'számítógépes játék'
        ]
      }
    },

    q_pre: {
      q_pre1 : {
        question: 'Jelenleg egy darab Bitcoin egyenértékű 20 794 039,98 magyar forrinttal, mit gondolsz, 10 éven belül lehetséges-e ,hogy munkahelyen Bitcoin-ba kapják az emberek a fizetést?',
        answers:[
          'Nem valószínű', 'Talán', 'Neutrális' ,'Elképzelhető', 'Elég sok esély látok rá'
        ]
      }
    }
  }


  // forma 1 questions

  forma1_questions = {
    q_part1: {
      q1: {
        question : 'Mi a Formula 1?',
        answers: [
          'Egy streaming szolgáltatás',
          'Nemzetközi autóverseny-sorozat', 
          'Tv-s vetélkedő', 
          'Egy nyílt forráskódú, ingyenes webböngésző program'
        ]
      },
    
      q2: {
        question : 'A felsorolt pilóták közül, ki nem nyert világbanokságot az F1-ben?',
        answers: [
          'Fernando Alonso', 
          'Jim Clark', 
          'Nyikita Mazepin', 
          'Sebastian Vettel'
        ]
      },
    
      q3: {
        question : 'A felsoroltak közül, melyik országban nem rendeztek F1 nagydíjat?',
        answers: [
          'Magyarország', 
          'Románia', 
          'Ausztria.', 
          'Ausztrália'
        ]
      },
      q4: {
        question : 'A felsoroltak közül, ki nyerte a 2020-as F1 szezont?',
        answers: [
          'Lewis Hamilton', 
          'Max Verstappen', 
          'Sergio Perez', 
          'George Russell'
        ]
      },
      q5: {
        question : 'A felsoroltak közül, melyik a legrövidebb pálya?',
        answers: [
          'Hungaroring', 
          'Monaco', 
          'Bahrain', 
          'Silverstone'
        ]
      }
    },
    
    q_pre : {
      q_pre1: {
        question : 'Hány évig fognak még F1 szezonokat rendezni?'
      },
    
      q_pre2: {
        question : 'Hány pontja lesz Lewis Hamiltonnak a 2022-es F1 szezon végén?'
      }
    }
  }
}
