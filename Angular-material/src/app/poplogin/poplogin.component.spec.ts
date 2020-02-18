import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoploginComponent } from './poplogin.component';

describe('PoploginComponent', () => {
  let component: PoploginComponent;
  let fixture: ComponentFixture<PoploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
