import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { SinglePostComponent } from '../single-post/single-post.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from 'src/app/services/post.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PostComponent', () => {
  let service: PostService;
  let httpClient: HttpClient;
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let httpTestingController: HttpTestingController;
  const postServiceSpy = jasmine.createSpyObj('PostService', ['getPost']);


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent, SinglePostComponent, FilterBarComponent, AddPostComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTableModule, MatSidenavModule, MatSelectModule, BrowserAnimationsModule],
      providers: [PostService],
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PostService);
    httpClient = TestBed.inject(HttpClient)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search on data', () => {
    component.filter = "asddsafsdasg"
    component.getSearchData({search: "asddsafsdasg"})
    expect(component.posts).toEqual([])
  });

  it('should fetch posts when ngOnInit is called', () => {
    const mockPosts = [{ 
      id: 0,
      user_id: 0,
      title: "string",
      body: "string"
     }];
    postServiceSpy.getPost.and.returnValue(of(mockPosts));
    expect(component.posts).toEqual([]);
  });
  

});
