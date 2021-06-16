import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Stock } from '../app/model/stock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should have stock instantiated on ngInit', () => {   3
    const appComponent = new AppComponent();      4
    expect(appComponent.stock).toBeUndefined();    5
    appComponent.ngOnInit();
    expect(appComponent.stock).toEqual(
      new Stock('Test Stock Company', 'TSC', 85, 80));   6
  });

  it('should have toggle stock favorite', () => {
    const appComponent = new AppComponent();
    appComponent.ngOnInit();
    expect(appComponent.stock.favorite).toBeFalsy();
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
    expect(appComponent.stock.favorite).toBeTruthy();
    appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
    expect(appComponent.stock.favorite).toBeFalsy();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stock-market'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stock-market');
  });

//  it('should render title', () => {
//    const fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    const compiled = fixture.nativeElement;
//    expect(compiled.querySelector('.content div').textContent).toContain('W');
//  });
});
