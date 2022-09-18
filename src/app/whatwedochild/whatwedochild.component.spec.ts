import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedochildComponent } from './whatwedochild.component';

describe('WhatwedochildComponent', () => {
  let component: WhatwedochildComponent;
  let fixture: ComponentFixture<WhatwedochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatwedochildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatwedochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
