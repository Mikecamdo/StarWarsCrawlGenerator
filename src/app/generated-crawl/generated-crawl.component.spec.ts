import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCrawlComponent } from './generated-crawl.component';

describe('GeneratedCrawlComponent', () => {
  let component: GeneratedCrawlComponent;
  let fixture: ComponentFixture<GeneratedCrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedCrawlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedCrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
