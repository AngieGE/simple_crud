import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioResultsComponent } from './cuestionario-results.component';

describe('CuestionarioResultsComponent', () => {
  let component: CuestionarioResultsComponent;
  let fixture: ComponentFixture<CuestionarioResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
