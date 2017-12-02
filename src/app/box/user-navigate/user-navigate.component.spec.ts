import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavigateComponent } from './user-navigate.component';

describe('UserNavigateComponent', () => {
  let component: UserNavigateComponent;
  let fixture: ComponentFixture<UserNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
