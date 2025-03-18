import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoCardsComponent } from './bloco-cards.component';

describe('BlocoCardsComponent', () => {
  let component: BlocoCardsComponent;
  let fixture: ComponentFixture<BlocoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
