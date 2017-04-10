/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NeuTravelService } from './neu-travel.service';

describe('NeuTravelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeuTravelService]
    });
  });

  it('should ...', inject([NeuTravelService], (service: NeuTravelService) => {
    expect(service).toBeTruthy();
  }));
});
