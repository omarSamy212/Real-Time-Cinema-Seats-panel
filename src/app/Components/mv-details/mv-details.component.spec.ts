import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvDetailsComponent } from './mv-details.component';

describe('MvDetailsComponent', () => {
  let component: MvDetailsComponent;
  let fixture: ComponentFixture<MvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
