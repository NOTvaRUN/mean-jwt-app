import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopregisterComponent } from './popregister.component';

describe('PopregisterComponent', () => {
  let component: PopregisterComponent;
  let fixture: ComponentFixture<PopregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
