import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaHomeComponent } from './cinema-home.component';

describe('CinemaHomeComponent', () => {
  let component: CinemaHomeComponent;
  let fixture: ComponentFixture<CinemaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
