import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticoComponent } from './plastico.component';

describe('PlasticoComponent', () => {
  let component: PlasticoComponent;
  let fixture: ComponentFixture<PlasticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
