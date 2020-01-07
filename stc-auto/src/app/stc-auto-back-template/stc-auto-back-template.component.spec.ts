import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StcAutoBackTemplateComponent } from './stc-auto-back-template.component';

describe('StcAutoBackTemplateComponent', () => {
  let component: StcAutoBackTemplateComponent;
  let fixture: ComponentFixture<StcAutoBackTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StcAutoBackTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StcAutoBackTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
