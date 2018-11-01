import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevisComponent } from './user-devis.component';

describe('UserDevisComponent', () => {
  let component: UserDevisComponent;
  let fixture: ComponentFixture<UserDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
