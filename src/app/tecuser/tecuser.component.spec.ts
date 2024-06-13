import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecuserComponent } from './tecuser.component';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';

describe('TecuserComponent', () => {
  let component: TecuserComponent;
  let fixture: ComponentFixture<TecuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecuserComponent, DeletepopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
