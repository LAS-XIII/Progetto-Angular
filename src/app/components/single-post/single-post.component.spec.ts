import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostComponent } from './single-post.component';

describe('SinglePostComponent', () => {
  let component: SinglePostComponent;
  let fixture: ComponentFixture<SinglePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePostComponent]
    });
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post if there are', () => {
    component.thereAreAnyPosts  = true; // Imposta la variabile error su true
    fixture.detectChanges(); // Aggiorna la vista
    const errorMessage = fixture.nativeElement.querySelector('.container');
    expect(errorMessage).toBeTruthy();
  });

  it('should display an error message if the are not post', () => {
    component.thereAreAnyPosts  = false; // Imposta la variabile error su false
    fixture.detectChanges(); // Aggiorna la vista
    const errorMessage = fixture.nativeElement.querySelector('.else-block');
    expect(errorMessage).toBeNull();
  });
});
