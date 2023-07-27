import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModule
import { BoosterPackOpeningComponent } from './booster-pack-opening.component';

describe('BoosterPackOpeningComponent', () => {
  let component: BoosterPackOpeningComponent;
  let fixture: ComponentFixture<BoosterPackOpeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoosterPackOpeningComponent],
      imports: [NgbModule] // Add NgbModule to imports
    });
    fixture = TestBed.createComponent(BoosterPackOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
