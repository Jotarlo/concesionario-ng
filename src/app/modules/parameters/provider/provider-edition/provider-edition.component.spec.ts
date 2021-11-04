import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderEditionComponent } from './provider-edition.component';

describe('ProviderEditionComponent', () => {
  let component: ProviderEditionComponent;
  let fixture: ComponentFixture<ProviderEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
