import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNodeConfigComponent } from './new-node-config.component';

describe('NewNodeConfigComponent', () => {
  let component: NewNodeConfigComponent;
  let fixture: ComponentFixture<NewNodeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNodeConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNodeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
