import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustionarioFormComponent } from './custionario-form.component';

describe('CustionarioFormComponent', () => {
  let component: CustionarioFormComponent;
  let fixture: ComponentFixture<CustionarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustionarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustionarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
