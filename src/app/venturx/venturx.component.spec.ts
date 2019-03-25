import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturxComponent } from './venturx.component';

describe('VenturxComponent', () => {
  let component: VenturxComponent;
  let fixture: ComponentFixture<VenturxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenturxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenturxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
