import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceEditionComponent } from './invoice-edition.component';

describe('InvoiceEditionComponent', () => {
  let component: InvoiceEditionComponent;
  let fixture: ComponentFixture<InvoiceEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
