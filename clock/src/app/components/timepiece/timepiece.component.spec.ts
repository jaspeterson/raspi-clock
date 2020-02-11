import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepieceComponent } from './timepiece.component';

describe('TimepieceComponent', () => {
  let component: TimepieceComponent;
  let fixture: ComponentFixture<TimepieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
