/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntiateTravelReqComponent } from '../intiate-travel-req.component';

describe('IntiateTravelReqComponent', () => {
  let component: IntiateTravelReqComponent;
  let fixture: ComponentFixture<IntiateTravelReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntiateTravelReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntiateTravelReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
