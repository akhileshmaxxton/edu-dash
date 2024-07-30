import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoursesDropdownComponent } from './resourses-dropdown.component';

describe('ResoursesDropdownComponent', () => {
  let component: ResoursesDropdownComponent;
  let fixture: ComponentFixture<ResoursesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResoursesDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResoursesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
