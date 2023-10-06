import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from 'src/app/services/login.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormMaterialModule } from 'src/app/modules/material/form-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpTestingController: HttpTestingController;
  const activatedRouteMock = {
    snapshot: {
      paramMap: new Map()
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, MatFormFieldModule, FormMaterialModule, BrowserAnimationsModule],
      providers: [
        LoginService,
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ],
      declarations: [LoginComponent]
    }).compileComponents()
    
    httpTestingController = TestBed.inject(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display error message when error is true', () => {
    component.error = true; // Imposta la variabile error su true
    fixture.detectChanges(); // Aggiorna la vista
    const errorMessage = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
  });

  it('should not display error message when error is false', () => {
    component.error = false; // Imposta la variabile error su false
    fixture.detectChanges(); // Aggiorna la vista
    const errorMessage = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeNull();
  });

  it('should is logged', () => {
    component.token = "token";
    component.onSubmit()
    expect(component.login).toHaveBeenCalled
  })

});
