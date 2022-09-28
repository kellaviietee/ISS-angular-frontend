import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssComponentComponent } from './iss-component.component';

describe('IssComponentComponent', () => {
  let component: IssComponentComponent;
  let fixture: ComponentFixture<IssComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
