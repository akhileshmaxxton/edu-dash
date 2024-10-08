import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPageComponent } from './university-page.component';

describe('UniversityPageComponent', () => {
  let component: UniversityPageComponent;
  let fixture: ComponentFixture<UniversityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
