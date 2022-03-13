import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedVideosComponent } from './liked-videos.component';

describe('LikedVideosComponent', () => {
  let component: LikedVideosComponent;
  let fixture: ComponentFixture<LikedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
