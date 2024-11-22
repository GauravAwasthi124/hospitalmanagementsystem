import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracttionerComponent } from './practtioner.component';

describe('PracttionerComponent', () => {
  let component: PracttionerComponent;
  let fixture: ComponentFixture<PracttionerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracttionerComponent]
    });
    fixture = TestBed.createComponent(PracttionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
