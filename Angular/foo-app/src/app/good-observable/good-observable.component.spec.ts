import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodObservableComponent } from './good-observable.component';

describe('GoodObservableComponent', () => {
  let component: GoodObservableComponent;
  let fixture: ComponentFixture<GoodObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
