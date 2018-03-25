import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailpageComponent } from './card-detailpage.component';

describe('CardDetailpageComponent', () => {
  let component: CardDetailpageComponent;
  let fixture: ComponentFixture<CardDetailpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
