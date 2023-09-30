import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from 'src/app/services/user.service';
import { SinglePostComponent } from '../single-post/single-post.component';
import { User } from 'src/app/interfaces/user';
import { of } from 'rxjs';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent, SinglePostComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UserService],
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should fetch user details', () => {
    const userService = TestBed.inject(UserService);
    component.idUser = 2;
    const userData: User = { 
      id: 0,
      name: "",
      email: "",
      gender: "",
      status: "",
     };

  
    spyOn(userService, 'getUserDetails').and.returnValue(of(userData));
  
    component.getUser();
  
    expect(userService.getUserDetails).toHaveBeenCalledWith(component.idUser.toString());
    expect(component.user).toEqual(userData);
  });
  

});
