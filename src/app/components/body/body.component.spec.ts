import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import { RouterModule } from '@angular/router';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule ],
      declarations: [BodyComponent]
    }).compileComponents()
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('the windows is thight', () => {
    component.collapsed = true;
    component.screenWidth = 800;
    let info = component.getBodyClass();
    expect(info).toBe('body-trimmed');
  });

  it('the windows is wide', () => {
    component.collapsed = true;
    component.screenWidth = 700;
    let info = component.getBodyClass();
    expect(info).toBe('body-md-screen');
  });

});