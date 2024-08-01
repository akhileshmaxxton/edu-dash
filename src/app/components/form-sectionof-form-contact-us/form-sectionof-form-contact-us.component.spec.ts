import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionofFormContactUsComponent } from './form-sectionof-form-contact-us.component';

describe('FormSectionofFormContactUsComponent', () => {
  let component: FormSectionofFormContactUsComponent;
  let fixture: ComponentFixture<FormSectionofFormContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSectionofFormContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSectionofFormContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
