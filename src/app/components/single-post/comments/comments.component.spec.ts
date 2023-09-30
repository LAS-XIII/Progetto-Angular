import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentsService } from 'src/app/services/comment.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CommentsService],
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
