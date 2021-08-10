import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicoComponent } from './organico.component';

describe('OrganicoComponent', () => {
  let component: OrganicoComponent;
  let fixture: ComponentFixture<OrganicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
