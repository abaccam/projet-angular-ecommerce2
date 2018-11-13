import { TestBed, inject } from '@angular/core/testing';

import { FormContactService } from './form-contact.service';

describe('FormContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormContactService]
    });
  });

  it('should be created', inject([FormContactService], (service: FormContactService) => {
    expect(service).toBeTruthy();
  }));
});
