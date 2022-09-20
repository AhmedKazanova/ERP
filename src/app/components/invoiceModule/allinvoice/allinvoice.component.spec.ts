import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinvoiceComponent } from './allinvoice.component';

describe('AllinvoiceComponent', () => {
  let component: AllinvoiceComponent;
  let fixture: ComponentFixture<AllinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
