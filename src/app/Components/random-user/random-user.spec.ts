import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUser } from './random-user';

describe('RandomUser', () => {
  let component: RandomUser;
  let fixture: ComponentFixture<RandomUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomUser]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RandomUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
