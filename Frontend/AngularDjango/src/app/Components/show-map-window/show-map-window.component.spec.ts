import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMapWindowComponent } from './show-map-window.component';

describe('ShowMapWindowComponent', () => {
  let component: ShowMapWindowComponent;
  let fixture: ComponentFixture<ShowMapWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMapWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMapWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
