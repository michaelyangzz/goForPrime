import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionadminComponent } from './permissionadmin.component';

describe('PermissionadminComponent', () => {
  let component: PermissionadminComponent;
  let fixture: ComponentFixture<PermissionadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
