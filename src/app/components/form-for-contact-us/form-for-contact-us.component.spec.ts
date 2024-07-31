import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForContactUsComponent } from './form-for-contact-us.component';

describe('FormForContactUsComponent', () => {
  let component: FormForContactUsComponent;
  let fixture: ComponentFixture<FormForContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormForContactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormForContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
