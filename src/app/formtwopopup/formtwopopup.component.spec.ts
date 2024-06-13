import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtwopopupComponent } from './formtwopopup.component';

describe('FormtwopopupComponent', () => {
  let component: FormtwopopupComponent;
  let fixture: ComponentFixture<FormtwopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormtwopopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormtwopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
