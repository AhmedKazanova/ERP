import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicespageComponent } from './invoicespage.component';

describe('InvoicespageComponent', () => {
  let component: InvoicespageComponent;
  let fixture: ComponentFixture<InvoicespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
