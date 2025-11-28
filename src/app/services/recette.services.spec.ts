import { TestBed } from '@angular/core/testing';

import { RecetteServices } from './recette.services';

describe('RecetteServices', () => {
  let service: RecetteServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetteServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
