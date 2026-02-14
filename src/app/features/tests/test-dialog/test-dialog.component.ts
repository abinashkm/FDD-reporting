import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-test-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  testForm: FormGroup;
  unit = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.testForm = this.fb.group({
      site: [data?.site || '', Validators.required],
      testType: [data?.testType || '', Validators.required],
      resultValue: [
        data?.resultValue || '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],
      date: [data?.date || new Date(), Validators.required],
      status: [data?.status || 'Completed', Validators.required]
    });
  }

  ngOnInit() {
    this.updateUnit(this.testForm.value.testType);

    this.testForm.get('testType')?.valueChanges.subscribe(value => {
      this.updateUnit(value);
    });
  }

  updateUnit(testType: string) {
    if (testType === 'pH Test') {
      this.unit = 'pH';
    } else if (testType === 'Nitrogen Test') {
      this.unit = 'ppm';
    } else {
      this.unit = '';
    }
  }

  save() {
    if (this.testForm.valid) {
      this.dialogRef.close({
        ...this.testForm.value,
        unit: this.unit
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
