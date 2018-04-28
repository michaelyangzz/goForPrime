import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleadminComponent } from './roleadmin.component';

describe('RoleadminComponent', () => {
  let component: RoleadminComponent;
  let fixture: ComponentFixture<RoleadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
