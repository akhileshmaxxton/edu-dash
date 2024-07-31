import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionForContactUsComponent } from './hero-section-for-contact-us.component';

describe('HeroSectionForContactUsComponent', () => {
  let component: HeroSectionForContactUsComponent;
  let fixture: ComponentFixture<HeroSectionForContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSectionForContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionForContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
