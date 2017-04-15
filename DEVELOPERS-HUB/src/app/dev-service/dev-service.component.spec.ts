import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevServiceComponent } from './dev-service.component';

describe('DevServiceComponent', () => {
  let component: DevServiceComponent;
  let fixture: ComponentFixture<DevServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
