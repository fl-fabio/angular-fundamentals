import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributiveDirectivesComponent } from './attributive-directives.component';

describe('AttributiveDirectivesComponent', () => {
  let component: AttributiveDirectivesComponent;
  let fixture: ComponentFixture<AttributiveDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributiveDirectivesComponent]
    });
    fixture = TestBed.createComponent(AttributiveDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
