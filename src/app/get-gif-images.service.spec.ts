import { TestBed } from '@angular/core/testing';

import { GetGifImagesService } from './get-gif-images.service';

describe('GetGifImagesService', () => {
  let service: GetGifImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGifImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
