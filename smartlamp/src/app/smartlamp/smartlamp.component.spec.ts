import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlampComponent } from './smartlamp.component';

describe('SmartlampComponent', () => {
  let component: SmartlampComponent;
  let fixture: ComponentFixture<SmartlampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartlampComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartlampComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
