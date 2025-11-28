import { TestBed } from '@angular/core/testing';

import { RestaurantServices } from './restaurant.services';

describe('RestaurantServices', () => {
  let service: RestaurantServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
