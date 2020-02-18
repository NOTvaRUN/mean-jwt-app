import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopaddComponent } from './popadd.component';

describe('PopaddComponent', () => {
  let component: PopaddComponent;
  let fixture: ComponentFixture<PopaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
