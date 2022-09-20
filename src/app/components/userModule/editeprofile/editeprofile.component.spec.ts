import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeprofileComponent } from './editeprofile.component';

describe('EditeprofileComponent', () => {
  let component: EditeprofileComponent;
  let fixture: ComponentFixture<EditeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
