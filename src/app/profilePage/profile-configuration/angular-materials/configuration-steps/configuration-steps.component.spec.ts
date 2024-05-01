import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationStepsComponent } from './configuration-steps.component';

describe('ConfigurationStepsComponent', () => {
  let component: ConfigurationStepsComponent;
  let fixture: ComponentFixture<ConfigurationStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationStepsComponent]
    });
    fixture = TestBed.createComponent(ConfigurationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
