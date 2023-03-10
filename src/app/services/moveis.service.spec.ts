import { TestBed } from '@angular/core/testing';

import { MoveisService } from './moveis.service';

describe('MoveisService', () => {
  let service: MoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
