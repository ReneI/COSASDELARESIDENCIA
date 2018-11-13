import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelreportesComponent } from './panelreportes.component';

describe('PanelreportesComponent', () => {
  let component: PanelreportesComponent;
  let fixture: ComponentFixture<PanelreportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelreportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
