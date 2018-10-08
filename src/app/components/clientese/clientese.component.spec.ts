import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteseComponent } from './clientese.component';

describe('ClienteseComponent', () => {
  let component: ClienteseComponent;
  let fixture: ComponentFixture<ClienteseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
