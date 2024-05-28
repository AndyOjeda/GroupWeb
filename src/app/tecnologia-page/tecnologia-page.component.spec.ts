import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaPageComponent } from './tecnologia-page.component';

describe('TecnologiaPageComponent', () => {
  let component: TecnologiaPageComponent;
  let fixture: ComponentFixture<TecnologiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnologiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
