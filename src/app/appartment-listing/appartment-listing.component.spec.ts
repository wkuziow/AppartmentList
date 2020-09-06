import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentListingComponent } from './appartment-listing.component';

describe('AppartmentListingComponent', () => {
  let component: AppartmentListingComponent;
  let fixture: ComponentFixture<AppartmentListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
