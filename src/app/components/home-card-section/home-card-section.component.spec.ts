import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardSectionComponent } from './home-card-section.component';

describe('HomeCardSectionComponent', () => {
  let component: HomeCardSectionComponent;
  let fixture: ComponentFixture<HomeCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
