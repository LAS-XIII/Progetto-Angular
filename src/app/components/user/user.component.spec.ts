import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from 'src/app/services/user.service';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { TableListComponent } from './table-list/table-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, FilterBarComponent, TableListComponent, AddUserComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule, MatSidenavModule, MatTableModule, MatSelectModule, RouterTestingModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
      providers: [UserService],
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if add function go', () => {
    component.add()
    expect(component.open).toBe(true)
  })
});
