import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditionComponent } from './sale-edition.component';

describe('SaleEditionComponent', () => {
  let component: SaleEditionComponent;
  let fixture: ComponentFixture<SaleEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
