import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemPageComponent } from './temtem-page.component';

describe('TemtemPageComponent', () => {
  let component: TemtemPageComponent;
  let fixture: ComponentFixture<TemtemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemtemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemtemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
