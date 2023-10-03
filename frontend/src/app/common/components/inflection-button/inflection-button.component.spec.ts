import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflectionButtonComponent } from './inflection-button.component';

describe('InflectionButtonComponent', () => {
  let component: InflectionButtonComponent;
  let fixture: ComponentFixture<InflectionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InflectionButtonComponent]
    });
    fixture = TestBed.createComponent(InflectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
