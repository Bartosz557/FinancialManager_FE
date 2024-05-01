import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerConfigurableExampleComponent } from './progress-spinner-configurable-example.component';

describe('ProgressSpinnerConfigurableExampleComponent', () => {
  let component: ProgressSpinnerConfigurableExampleComponent;
  let fixture: ComponentFixture<ProgressSpinnerConfigurableExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerConfigurableExampleComponent]
    });
    fixture = TestBed.createComponent(ProgressSpinnerConfigurableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
