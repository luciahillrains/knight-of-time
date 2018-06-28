import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHostComponent } from './event-host.component';

describe('EventHostComponent', () => {
  let component: EventHostComponent;
  let fixture: ComponentFixture<EventHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
