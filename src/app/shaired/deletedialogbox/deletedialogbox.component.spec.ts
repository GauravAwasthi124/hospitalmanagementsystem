import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedialogboxComponent } from './deletedialogbox.component';

describe('DeletedialogboxComponent', () => {
  let component: DeletedialogboxComponent;
  let fixture: ComponentFixture<DeletedialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedialogboxComponent]
    });
    fixture = TestBed.createComponent(DeletedialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
