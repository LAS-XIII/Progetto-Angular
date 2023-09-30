import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from 'src/app/services/user.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule, MatInputModule, MatSelectModule, FormsModule, MatFormFieldModule, MatSidenavModule, BrowserAnimationsModule],
      providers: [UserService],
      declarations: [AddUserComponent]
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should the page is wide and is opened', () => {
    component.pageIsLarge = true;
    component.opened = true;
    component.toogle()
    expect(component.opened).toBe(false)
  })

  it('should the page is thight and is closed', () => {
    component.pageIsLarge = false;
    component.opened = false;
    component.toogle()
    expect(component.opened).toBe(true)
  })

  it('should the page is thight and is opened', () => {
    component.pageIsLarge = false;
    component.opened = true;
    component.toogle()
    expect(component.opened).toBe(false)
  })


});
