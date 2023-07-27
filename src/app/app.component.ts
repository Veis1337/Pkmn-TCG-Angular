import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from './pokemon.service';
import { BoosterPackOpeningComponent } from './booster-pack-opening/booster-pack-opening.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teamBuildingStarted = false;
  hasLocalStorageData = false;
  isFetchingData = true;

  constructor(private modalService: NgbModal, private pokemonService: PokemonService) {
    this.fetchBaseSetData();
  }

  fetchBaseSetData(): void {
    this.pokemonService.fetchAndStoreBaseSetData().subscribe(
      () => {
        // Data fetched successfully, update loading state
        this.hasLocalStorageData = true;
        this.isFetchingData = false;
      },
      (error) => {
        console.error('Error fetching and storing base set data:', error);
        // Handle the error as needed
        this.isFetchingData = false; // Update loading state even if there's an error
      }
    );
  }

  openBoosterPack(): void {
    if (!this.hasLocalStorageData) {
      console.log('Local storage data is not available. Please wait for data to be fetched.');
      // You can display a message to the user or prevent the "OPEN PACK" button from being clicked
      return;
    }

    this.pokemonService.getBoosterPack(6).subscribe(
      (cards) => {
        const modalRef = this.modalService.open(BoosterPackOpeningComponent);
        modalRef.componentInstance.boosterPack = cards;
      },
      (error) => {
        console.error('Error opening booster pack:', error);
      }
    );
  }
}
