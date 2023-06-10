import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveServiceComponent } from './prove-service.component';

describe('ProveServiceComponent', () => {
  let component: ProveServiceComponent;
  let fixture: ComponentFixture<ProveServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveServiceComponent]
    });
    fixture = TestBed.createComponent(ProveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
