import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-test-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './test-type-dialog.component.html',
  styleUrls: ['./test-type-dialog.component.scss']
})
export class TestTypeDialogComponent {

  testTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TestTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.testTypeForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      status: [data?.status || 'Active', Validators.required]
    });
  }

  save() {
    if (this.testTypeForm.valid) {
      this.dialogRef.close(this.testTypeForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
