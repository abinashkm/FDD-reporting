import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_SITES } from '../mock-data/mock-sites';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private sites = [...MOCK_SITES];

  getSites(): Observable<any[]> {
    return of(this.sites);
  }

  addSite(site: any): Observable<any> {
    this.sites.push(site);
    return of(site);
  }

  updateSite(updatedSite: any): Observable<any> {
    this.sites = this.sites.map(s =>
      s.id === updatedSite.id ? updatedSite : s
    );
    return of(updatedSite);
  }

  deleteSite(id: string): Observable<boolean> {
    this.sites = this.sites.filter(s => s.id !== id);
    return of(true);
  }
}
