import { TestBed } from '@angular/core/testing';

import { BooksServiseService } from './books-servise.service';

describe('BooksServiseService', () => {
  let service: BooksServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
