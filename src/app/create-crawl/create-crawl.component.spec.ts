import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCrawlComponent } from './create-crawl.component';

describe('CreateCrawlComponent', () => {
  let component: CreateCrawlComponent;
  let fixture: ComponentFixture<CreateCrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCrawlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
