import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCreationComponent } from './sale-creation.component';

describe('SaleCreationComponent', () => {
  let component: SaleCreationComponent;
  let fixture: ComponentFixture<SaleCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
