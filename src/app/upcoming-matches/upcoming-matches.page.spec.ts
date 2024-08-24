import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcomingMatchesPage } from './upcoming-matches.page';

describe('UpcomingMatchesPage', () => {
  let component: UpcomingMatchesPage;
  let fixture: ComponentFixture<UpcomingMatchesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
