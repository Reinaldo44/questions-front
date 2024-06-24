import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooterComponent } from './flooter.component';

describe('FlooterComponent', () => {
  let component: FlooterComponent;
  let fixture: ComponentFixture<FlooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
