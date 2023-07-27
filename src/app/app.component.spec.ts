import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { BoosterPackOpeningComponent } from './booster-pack-opening/booster-pack-opening.component';
import { PokemonService } from './pokemon.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let pokemonService: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, BoosterPackOpeningComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [PokemonService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and store base set data on initialization', () => {
    const baseSetData = [
      { id: 'base1-1', rarity: 'Common' },
      { id: 'base1-2', rarity: 'Common' },
      // Add more sample data as needed
    ];

    spyOn(pokemonService, 'fetchAndStoreBaseSetData').and.callThrough();

    fixture.detectChanges(); // Trigger ngOnInit and component initialization

    const req = httpMock.expectOne('https://api.pokemontcg.io/v2/cards?set=base1&pageSize=500');
    expect(req.request.method).toBe('GET');
    req.flush({ data: baseSetData });

    expect(pokemonService.fetchAndStoreBaseSetData).toHaveBeenCalled();
    expect(localStorage.getItem('baseSetData')).toEqual(JSON.stringify(baseSetData));
  });

  it('should start the booster pack opening process', () => {
    const navigateSpy = spyOn((component as any).router, 'navigate');

    component.openBoosterPack();

    expect(navigateSpy).toHaveBeenCalledWith(['/booster-pack-opening']);
  });
});
