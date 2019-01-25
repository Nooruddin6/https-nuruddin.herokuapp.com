import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhythisComponent } from './whythis.component';

describe('WhythisComponent', () => {
  let component: WhythisComponent;
  let fixture: ComponentFixture<WhythisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhythisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhythisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
