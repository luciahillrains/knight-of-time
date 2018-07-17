import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScreenComponent } from './card-screen.component';

describe('CardScreenComponent', () => {
  let component: CardScreenComponent;
  let fixture: ComponentFixture<CardScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
