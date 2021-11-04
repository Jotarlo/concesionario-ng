import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCreationComponent } from './provider-creation.component';

describe('ProviderCreationComponent', () => {
  let component: ProviderCreationComponent;
  let fixture: ComponentFixture<ProviderCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
