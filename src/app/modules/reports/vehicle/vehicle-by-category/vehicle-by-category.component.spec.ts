import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleByCategoryComponent } from './vehicle-by-category.component';

describe('VehicleByCategoryComponent', () => {
  let component: VehicleByCategoryComponent;
  let fixture: ComponentFixture<VehicleByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
