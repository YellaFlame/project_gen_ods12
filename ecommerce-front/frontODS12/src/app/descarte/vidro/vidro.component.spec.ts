import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidroComponent } from './vidro.component';

describe('VidroComponent', () => {
  let component: VidroComponent;
  let fixture: ComponentFixture<VidroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
