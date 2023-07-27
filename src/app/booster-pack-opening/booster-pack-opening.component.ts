import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booster-pack-opening',
  templateUrl: './booster-pack-opening.component.html',
  styleUrls: ['./booster-pack-opening.component.css']
})
export class BoosterPackOpeningComponent {
  @Input() boosterPack: any[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  closeModal(): void {
    this.activeModal.dismiss();
  }

  openBaseSet(): void {
    // Implement the logic to open a new base set
    // You can add the logic here to fetch and display a new base set of cards
  }
}
