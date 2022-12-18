import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumStoreComponent } from './curriculum-store.component';

describe('CurriculumStoreComponent', () => {
  let component: CurriculumStoreComponent;
  let fixture: ComponentFixture<CurriculumStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
