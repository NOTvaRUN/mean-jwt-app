import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopeditComponent } from './popedit.component';

describe('PopeditComponent', () => {
  let component: PopeditComponent;
  let fixture: ComponentFixture<PopeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
