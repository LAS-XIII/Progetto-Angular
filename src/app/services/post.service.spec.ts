import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { PostService } from './post.service';
import { Post } from '../interfaces/post';


describe('PostService', () => {
  let service: PostService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PostService);
    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testPost: Post = {
      id: 0,
      user_id: 0,
      title: "prova",
      body: "prova"
    }  
    httpClient.get<Post>("./post-test.ts")
      .subscribe((data) => {
        expect(data).toEqual(testPost)
      });  
    const req = httpTestingController.expectOne('./post-test.ts');
    expect(req.request.method).toEqual('GET');
    req.flush(testPost);
    httpTestingController.verify();

  });

  it('should insert a comment for a post', () => {
    const testPost = {
      id: 0,
      user_id: 0,
      title: "prova",
      body: "prova"
    };
    const idPost = 1; 
    service.insertPost(testPost, idPost).subscribe(data => {
      expect(data).toEqual(testPost);
    });
    const req = httpMock.expectOne(`${service.endpoint}users/${idPost}/posts`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toContain('Bearer');
    req.flush(testPost); 
  });

});
