import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTipComponent } from './success-tip.component';

describe('SuccessTipComponent', () => {
  let component: SuccessTipComponent;
  let fixture: ComponentFixture<SuccessTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
