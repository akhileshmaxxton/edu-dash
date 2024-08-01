import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionofFormContactUsComponent } from './hero-sectionof-form-contact-us.component';

describe('HeroSectionofFormContactUsComponent', () => {
  let component: HeroSectionofFormContactUsComponent;
  let fixture: ComponentFixture<HeroSectionofFormContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSectionofFormContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionofFormContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
