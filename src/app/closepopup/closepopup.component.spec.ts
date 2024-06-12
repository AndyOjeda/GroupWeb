import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosepopupComponent } from './closepopup.component';

describe('ClosepopupComponent', () => {
  let component: ClosepopupComponent;
  let fixture: ComponentFixture<ClosepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosepopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClosepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
