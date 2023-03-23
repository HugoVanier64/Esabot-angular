import { TestBed } from '@angular/core/testing';

import { SabotService } from './sabot.service';

describe('SabotService', () => {
  let service: SabotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SabotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
