import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddComComponent } from './add-com.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentsService } from 'src/app/services/comment.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('AddComComponent', () => {
  let component: AddComComponent;
  let fixture: ComponentFixture<AddComComponent>;
  let httpTestingController: HttpTestingController;
  let commentsService: jasmine.SpyObj<CommentsService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddComComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule, MatExpansionModule, MatInputModule, FormsModule, MatFormFieldModule],
      providers: [CommentsService],
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
