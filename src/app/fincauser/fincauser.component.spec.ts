import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincauserComponent } from './fincauser.component';

describe('FincauserComponent', () => {
  let component: FincauserComponent;
  let fixture: ComponentFixture<FincauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FincauserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FincauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
