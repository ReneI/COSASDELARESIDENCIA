import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasFormsComponent } from './notas-forms.component';

describe('NotasFormsComponent', () => {
  let component: NotasFormsComponent;
  let fixture: ComponentFixture<NotasFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
