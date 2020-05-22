import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustionarioListComponent } from './custionario-list.component';

describe('CustionarioListComponent', () => {
  let component: CustionarioListComponent;
  let fixture: ComponentFixture<CustionarioListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustionarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustionarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
