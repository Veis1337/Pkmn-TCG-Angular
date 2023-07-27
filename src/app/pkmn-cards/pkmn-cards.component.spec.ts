import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnCardsComponent } from './pkmn-cards.component';

describe('PkmnCardsComponent', () => {
  let component: PkmnCardsComponent;
  let fixture: ComponentFixture<PkmnCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PkmnCardsComponent]
    });
    fixture = TestBed.createComponent(PkmnCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
