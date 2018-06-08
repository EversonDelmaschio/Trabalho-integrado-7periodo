import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInicioComponent } from './dashboard-inicio.component';

describe('DashboardInicioComponent', () => {
  let component: DashboardInicioComponent;
  let fixture: ComponentFixture<DashboardInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
