import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Card } from '../card';
import { DataKeeperService } from '../data-keeper.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let comp : AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations : [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });
  it('Page title null', async(() => {
    fixture.detectChanges();
  }));
});
