import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pkmn-cards',
  templateUrl: './pkmn-cards.component.html',
  styleUrls: ['./pkmn-cards.component.css']
})
export class PkmnCardsComponent implements OnInit {
  cards: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://api.pokemontcg.io/v2/cards?pageSize=20')
      .subscribe((response) => {
        this.cards = response.data;
      });
  }
}
