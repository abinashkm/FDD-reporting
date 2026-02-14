import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { SiteDialogComponent } from './site-dialog/site-dialog.component';
import { ConfirmDialogComponent } from '../users/confirm-dialog/confirm-dialog.component';
import { MOCK_SITES } from '../../core/mock-data/mock-sites';


@Component({
  selector: 'app-sites',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent {


  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'name',
    'location',
    'area',
    'soilType',
    'status',
    'actions'
  ];

  sites = [...MOCK_SITES];

    openAddSiteDialog() {
    const dialogRef = this.dialog.open(SiteDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newSite = {
          id: `S-${Math.floor(Math.random() * 1000)}`,
          ...result
        };
        this.sites = [...this.sites, newSite];
      }
    });
  }

    openEditSiteDialog(site: any) {
    const dialogRef = this.dialog.open(SiteDialogComponent, {
      width: '450px',
      data: site
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sites = this.sites.map(s =>
          s.id === site.id ? { ...s, ...result } : s
        );
      }
    });
  }

    deleteSite(site: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: site
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sites = this.sites.filter(s => s.id !== site.id);
      }
    });
  }

}
