import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCwComponent } from './create-cw.component';

describe('CreateCwComponent', () => {
  let component: CreateCwComponent;
  let fixture: ComponentFixture<CreateCwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
