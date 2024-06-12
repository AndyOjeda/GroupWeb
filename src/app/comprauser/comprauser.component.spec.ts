import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprauserComponent } from './comprauser.component';

describe('ComprauserComponent', () => {
  let component: ComprauserComponent;
  let fixture: ComponentFixture<ComprauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprauserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
