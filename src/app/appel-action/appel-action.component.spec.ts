import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelActionComponent } from './appel-action.component';

describe('AppelActionComponent', () => {
  let component: AppelActionComponent;
  let fixture: ComponentFixture<AppelActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
