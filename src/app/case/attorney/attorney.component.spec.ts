import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyComponent } from './attorney.component';

describe('AttorneyComponent', () => {
  let component: AttorneyComponent;
  let fixture: ComponentFixture<AttorneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttorneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
