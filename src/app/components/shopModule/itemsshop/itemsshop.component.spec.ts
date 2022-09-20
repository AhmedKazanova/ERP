import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsshopComponent } from './itemsshop.component';

describe('ItemsshopComponent', () => {
  let component: ItemsshopComponent;
  let fixture: ComponentFixture<ItemsshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
