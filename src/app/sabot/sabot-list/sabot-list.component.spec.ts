import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabotListComponent } from './sabot-list.component';

describe('SabotListComponent', () => {
  let component: SabotListComponent;
  let fixture: ComponentFixture<SabotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabotListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
