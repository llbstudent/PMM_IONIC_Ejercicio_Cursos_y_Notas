import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeBuilderComponent } from './joke-builder.component';

describe('JokeBuilderComponent', () => {
  let component: JokeBuilderComponent;
  let fixture: ComponentFixture<JokeBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
