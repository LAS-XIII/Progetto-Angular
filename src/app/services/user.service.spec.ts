import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { User } from '../interfaces/user';


describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(UserService);
    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testUser: User = {
      id: 0,
      name: "prova",
      email: "prova",
      gender: "prova",
      status: "prova"
    }  
    httpClient.get<User>("./user-test.ts")
      .subscribe((data) => {
        expect(data).toEqual(testUser)
      });  
    const req = httpTestingController.expectOne('./user-test.ts');
    expect(req.request.method).toEqual('GET');
    req.flush(testUser);
    httpTestingController.verify();
  });

});
