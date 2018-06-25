import { TestBed, inject } from '@angular/core/testing';

import { DataSeviceService } from './data-sevice.service';

describe('DataSeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSeviceService]
    });
  });

  it('should be created', inject([DataSeviceService], (service: DataSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
