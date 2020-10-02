import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeListComponent } from './joke-list-component.component';

describe('JokeListComponentComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
