import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaPageComponent } from './finca-page.component';

describe('FincaPageComponent', () => {
  let component: FincaPageComponent;
  let fixture: ComponentFixture<FincaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FincaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FincaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
