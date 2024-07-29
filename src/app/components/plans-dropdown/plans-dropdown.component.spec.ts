import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansDropdownComponent } from './plans-dropdown.component';

describe('PlansDropdownComponent', () => {
  let component: PlansDropdownComponent;
  let fixture: ComponentFixture<PlansDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlansDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
