import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggInComponent } from './logg-in.component';

describe('LoggInComponent', () => {
  let component: LoggInComponent;
  let fixture: ComponentFixture<LoggInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
