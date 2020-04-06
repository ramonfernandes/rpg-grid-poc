import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutBarComponent } from './shortcut-bar.component';

describe('ShortcutBarComponent', () => {
  let component: ShortcutBarComponent;
  let fixture: ComponentFixture<ShortcutBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
