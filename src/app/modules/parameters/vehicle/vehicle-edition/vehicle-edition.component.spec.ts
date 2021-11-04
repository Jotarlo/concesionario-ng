import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditionComponent } from './vehicle-edition.component';

describe('VehicleEditionComponent', () => {
  let component: VehicleEditionComponent;
  let fixture: ComponentFixture<VehicleEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
