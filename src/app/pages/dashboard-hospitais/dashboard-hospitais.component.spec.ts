import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHospitaisComponent } from './dashboard-hospitais.component';

describe('DashboardHospitaisComponent', () => {
  let component: DashboardHospitaisComponent;
  let fixture: ComponentFixture<DashboardHospitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHospitaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardHospitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
