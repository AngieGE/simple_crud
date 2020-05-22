import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioFillComponent } from './cuestionario-fill.component';

describe('CuestionarioFillComponent', () => {
  let component: CuestionarioFillComponent;
  let fixture: ComponentFixture<CuestionarioFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
