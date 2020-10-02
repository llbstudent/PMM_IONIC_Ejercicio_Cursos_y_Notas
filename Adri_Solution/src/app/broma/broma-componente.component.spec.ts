import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BromaComponente } from './broma-componente.component';

describe('BromaComponenteComponent', () => {
  let component: BromaComponente;
  let fixture: ComponentFixture<BromaComponente>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BromaComponente ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BromaComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
