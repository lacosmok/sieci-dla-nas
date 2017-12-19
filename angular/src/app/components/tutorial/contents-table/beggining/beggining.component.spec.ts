import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegginingComponent } from './beggining.component';

describe('BegginingComponent', () => {
  let component: BegginingComponent;
  let fixture: ComponentFixture<BegginingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegginingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegginingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
