import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly baseSetDataKey = 'baseSetData';
  private baseSetData: any[] = [];

  constructor(private http: HttpClient) { }

  // Method to fetch and store all base set IDs and rarities in local storage
  fetchAndStoreBaseSetData(): void {
    this.http.get<any>('https://api.pokemontcg.io/v2/cards?set=base1&pageSize=500')
      .subscribe(
        (response) => {
          const baseSetCards = response.data;
          this.baseSetData = baseSetCards.map((card: any) => {
            return { id: card.id, rarity: card.rarity };
          });
          localStorage.setItem(this.baseSetDataKey, JSON.stringify(this.baseSetData));
        },
        (error) => {
          console.error('Error fetching base set data:', error);
        }
      );
  }

  // Method to get a simulated booster pack
  getBoosterPack(numCards: number): Observable<any[]> {
    const boosterPack: any[] = [];
    const rarities = ['Common', 'Uncommon', 'Rare', 'Rare Holo'];

    for (let i = 0; i < numCards; i++) {
      const randomRarity = rarities[Math.floor(Math.random() * rarities.length)];
      const cardsWithRarity = this.baseSetData.filter((card) => card.rarity === randomRarity);
      const randomCard = cardsWithRarity[Math.floor(Math.random() * cardsWithRarity.length)];

      if (randomCard) {
        boosterPack.push(this.fetchCardById(randomCard.id));
      }
    }

    return forkJoin(boosterPack);
  }

  // Method to fetch a single card by ID (made it public for testing purposes)
  fetchCardById(cardId: string): Observable<any> {
    return this.http.get<any>(`https://api.pokemontcg.io/v2/cards/${cardId}`);
  }
}
