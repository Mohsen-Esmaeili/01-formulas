import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeDetailComponent } from './visualize-detail.component';

describe('VisualizeDetailComponent', () => {
  let component: VisualizeDetailComponent;
  let fixture: ComponentFixture<VisualizeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
