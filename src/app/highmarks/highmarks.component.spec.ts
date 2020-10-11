import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighmarksComponent } from './highmarks.component';

describe('HighmarksComponent', () => {
  let component: HighmarksComponent;
  let fixture: ComponentFixture<HighmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
