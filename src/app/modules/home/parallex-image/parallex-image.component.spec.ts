import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallexImageComponent } from './parallex-image.component';

describe('ParallexImageComponent', () => {
  let component: ParallexImageComponent;
  let fixture: ComponentFixture<ParallexImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallexImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallexImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
