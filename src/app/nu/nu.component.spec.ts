import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuComponent } from './nu.component';

describe('NuComponent', () => {
  let component: NuComponent;
  let fixture: ComponentFixture<NuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
