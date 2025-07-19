import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuranPage } from './quran.page';

describe('QuranPage', () => {
  let component: QuranPage;
  let fixture: ComponentFixture<QuranPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
