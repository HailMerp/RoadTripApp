import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPanelComponent } from './reg-panel.component';

describe('RegPanelComponent', () => {
  let component: RegPanelComponent;
  let fixture: ComponentFixture<RegPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
