import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModauserComponent } from './modauser.component';

describe('ModauserComponent', () => {
  let component: ModauserComponent;
  let fixture: ComponentFixture<ModauserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModauserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModauserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
