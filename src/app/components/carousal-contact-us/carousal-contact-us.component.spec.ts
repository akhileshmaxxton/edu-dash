import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalContactUsComponent } from './carousal-contact-us.component';

describe('CarousalContactUsComponent', () => {
  let component: CarousalContactUsComponent;
  let fixture: ComponentFixture<CarousalContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarousalContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousalContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
