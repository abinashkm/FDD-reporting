import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTypeDialogComponent } from './test-type-dialog.component';

describe('TestTypeDialogComponent', () => {
  let component: TestTypeDialogComponent;
  let fixture: ComponentFixture<TestTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTypeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
