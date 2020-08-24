import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueTableComponent } from './technique-table.component';

describe('TechniqueTableComponent', () => {
  let component: TechniqueTableComponent;
  let fixture: ComponentFixture<TechniqueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniqueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniqueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
