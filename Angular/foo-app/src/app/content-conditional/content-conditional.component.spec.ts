import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConditionalComponent } from './content-conditional.component';

describe('ContentConditionalComponent', () => {
  let component: ContentConditionalComponent;
  let fixture: ComponentFixture<ContentConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentConditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
