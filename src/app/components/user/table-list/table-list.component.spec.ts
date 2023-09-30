import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableListComponent } from './table-list.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MatTableModule} from '@angular/material/table';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatTableModule],
      providers: [UserService],
      declarations: [TableListComponent]
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
