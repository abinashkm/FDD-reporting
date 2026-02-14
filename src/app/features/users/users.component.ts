import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MOCK_USERS } from '../../core/mock-data/mock-users';

@Component({
  selector: 'app-users',
  imports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'actions'];

  users = [...MOCK_USERS];


  constructor(private dialog: MatDialog) {}
  openAddUserDialog() {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newUser = {
          id: `U-${Math.floor(Math.random() * 1000)}`,
          ...result
        };
        this.users = [...this.users, newUser];
      }
    });
  }

  openEditUserDialog(user: any) {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '400px',
    data: user
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.users = this.users.map(u =>
        u.id === user.id ? { ...u, ...result } : u
      );
    }
  });
  }

  deleteUser(user: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = this.users.filter(u => u.id !== user.id);
      }
    });
 }



}
