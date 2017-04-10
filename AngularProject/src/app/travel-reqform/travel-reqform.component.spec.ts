/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelReqformComponent } from './travel-reqform.component';

describe('TravelReqformComponent', () => {
  let component: TravelReqformComponent;
  let fixture: ComponentFixture<TravelReqformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelReqformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelReqformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
