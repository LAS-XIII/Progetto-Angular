import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPostComponent } from './add-post.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import { PostService } from 'src/app/services/post.service';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule, MatInputModule, MatSelectModule, FormsModule, MatFormFieldModule, MatSidenavModule, BrowserAnimationsModule],
      providers: [PostService],
      declarations: [AddPostComponent]
    });
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the opened value when is open', () => {
    component.opened = true;
    component.toogle();
    expect(component.opened).toBe(false)
  })

  it('should change the opened value when is close', () => {
    component.opened = false;
    component.toogle();
    expect(component.opened).toBe(true)
  })
  
});
