import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLetterComponent } from './create-letter.component';

describe('CreateLetterComponent', () => {
  let component: CreateLetterComponent;
  let fixture: ComponentFixture<CreateLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
