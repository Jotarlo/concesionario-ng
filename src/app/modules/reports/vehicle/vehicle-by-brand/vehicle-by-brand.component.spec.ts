import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleByBrandComponent } from './vehicle-by-brand.component';

describe('VehicleByBrandComponent', () => {
  let component: VehicleByBrandComponent;
  let fixture: ComponentFixture<VehicleByBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleByBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
