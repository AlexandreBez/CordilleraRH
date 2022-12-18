import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOpportunitiesComponent } from './internal-opportunities.component';

describe('InternalOpportunitiesComponent', () => {
  let component: InternalOpportunitiesComponent;
  let fixture: ComponentFixture<InternalOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOpportunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
