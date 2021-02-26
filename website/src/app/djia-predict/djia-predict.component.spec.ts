import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjiaPredictComponent } from './djia-predict.component';

describe('DjiaPredictComponent', () => {
  let component: DjiaPredictComponent;
  let fixture: ComponentFixture<DjiaPredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjiaPredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjiaPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
