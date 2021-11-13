import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URL
  private api_url = "http://localhost/questionnare/api/interface.php"

  result = {
    elso_ertek: 0,
    masodik_ertek: 0,
    harmadik_ertek: 0,
    negyedik_ertek: 0,
    otodik_ertek: 0,
    predikcios_ertek: 0
  }

  constructor(private http: HttpClient) { }

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
    this.http.post(this.api_url, result).subscribe(response => console.log(response))
  }
}
