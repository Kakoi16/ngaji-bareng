import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HadistPage } from './hadist.page';

describe('HadistPage', () => {
  let component: HadistPage;
  let fixture: ComponentFixture<HadistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HadistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
