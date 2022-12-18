import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsAndRolesComponent } from './promotions-and-roles.component';

describe('PromotionsAndRolesComponent', () => {
  let component: PromotionsAndRolesComponent;
  let fixture: ComponentFixture<PromotionsAndRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsAndRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsAndRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
