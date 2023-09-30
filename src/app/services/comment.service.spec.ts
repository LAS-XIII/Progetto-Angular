import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CommentsService } from './comment.service';
import { Comment } from '../interfaces/comment';


describe('CommentsService', () => {
  let service: CommentsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CommentsService);
    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testComment: Comment = {
      id: 0,
      post_id: 0,
      name: "prova",
      email: "prova",
      body: "prova"
    }  
    httpClient.get<Comment>("./comment-test.ts")
      .subscribe((data) => {
        expect(data).toEqual(testComment)
      });  
    const req = httpTestingController.expectOne('./comment-test.ts');
    expect(req.request.method).toEqual('GET');
    req.flush(testComment);
    httpTestingController.verify();
    
  });
  
  it('can test HttpClient.get comment for post', () => {
    const testComment: Comment = {
      id: 0,
      post_id: 0,
      name: "prova",
      email: "prova",
      body: "prova"
    }  
    httpClient.get<Comment>("./comment-test.ts")
      .subscribe((data) => {
        expect(data).toEqual(testComment)
      });  
    const req = httpTestingController.expectOne('./comment-test.ts');
    expect(req.request.method).toEqual('GET');
    req.flush(testComment);
    httpTestingController.verify();
    
  });

  it('should insert a comment for a post', () => {
    const testComment = {
      id: 0,
      post_id: 0,
      name: 'prova',
      email: 'prova',
      body: 'prova'
    };
    const idPost = 1; 
    service.insertComment(testComment, idPost).subscribe(data => {
      expect(data).toEqual(testComment);
    });
    const req = httpMock.expectOne(`${service.endpoint}posts/${idPost}/comments`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toContain('Bearer');
    req.flush(testComment); 
  });

});

