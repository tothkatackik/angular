import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetelComponent } from './tetel.component';

describe('TetelComponent', () => {
  let component: TetelComponent;
  let fixture: ComponentFixture<TetelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TetelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
