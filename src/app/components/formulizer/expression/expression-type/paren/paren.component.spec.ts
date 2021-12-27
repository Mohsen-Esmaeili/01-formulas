import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParenComponent } from './paren.component';


describe('ParenComponent', () =>
{
  let component: ParenComponent;
  let fixture: ComponentFixture<ParenComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [ParenComponent]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(ParenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
