import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanstackComponent } from './meanstack.component';

describe('MeanstackComponent', () => {
  let component: MeanstackComponent;
  let fixture: ComponentFixture<MeanstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
