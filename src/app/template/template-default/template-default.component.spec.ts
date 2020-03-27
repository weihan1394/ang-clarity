import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDefaultComponent } from './template-default.component';

describe('TemplateDefaultComponent', () => {
  let component: TemplateDefaultComponent;
  let fixture: ComponentFixture<TemplateDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
