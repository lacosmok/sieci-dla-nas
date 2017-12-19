import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNetworkComponent } from './first-network.component';

describe('FirstNetworkComponent', () => {
  let component: FirstNetworkComponent;
  let fixture: ComponentFixture<FirstNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
