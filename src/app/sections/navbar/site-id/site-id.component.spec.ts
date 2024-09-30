import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteIdComponent } from './site-id.component';

describe('SiteIdComponent', () => {
  let component: SiteIdComponent;
  let fixture: ComponentFixture<SiteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteIdComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SiteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
