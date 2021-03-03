import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PeopleService ]
    });
    service = TestBed.get(PeopleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should http GET data', () => {
    service.getPeopleList().subscribe((res) => {
      expect(res).toBeGreaterThan(0);
    });
    const req = httpMock.expectOne('https://randomuser.me/api/?results=50');
    expect(req.request.method).toEqual("GET");
    httpMock.verify();
  });
});
