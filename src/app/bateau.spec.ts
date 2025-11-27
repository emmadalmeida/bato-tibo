import { TestBed } from '@angular/core/testing';

import { Bateau } from './bateau';

describe('Bateau', () => {
  let service: Bateau;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bateau);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
