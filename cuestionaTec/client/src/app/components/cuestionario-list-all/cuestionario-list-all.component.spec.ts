import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioListAllComponent } from './cuestionario-list-all.component';

describe('CuestionarioListAllComponent', () => {
  let component: CuestionarioListAllComponent;
  let fixture: ComponentFixture<CuestionarioListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
