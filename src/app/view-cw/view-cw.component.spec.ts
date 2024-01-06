import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCwComponent } from './view-cw.component';

describe('ViewCwComponent', () => {
  let component: ViewCwComponent;
  let fixture: ComponentFixture<ViewCwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
