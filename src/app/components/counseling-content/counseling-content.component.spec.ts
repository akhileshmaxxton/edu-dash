import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingContentComponent } from './counseling-content.component';

describe('CounselingContentComponent', () => {
  let component: CounselingContentComponent;
  let fixture: ComponentFixture<CounselingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounselingContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounselingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
