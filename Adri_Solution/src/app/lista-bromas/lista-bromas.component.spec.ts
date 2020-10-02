import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBromasComponent } from './lista-bromas.component';

describe('ListaBromasComponent', () => {
  let component: ListaBromasComponent;
  let fixture: ComponentFixture<ListaBromasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBromasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBromasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
