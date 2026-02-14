import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TEST_TYPES } from '../mock-data/mock-test-type';

@Injectable({
  providedIn: 'root'
})
export class TestTypeService {

  private testTypes = [...MOCK_TEST_TYPES];

  getTestTypes(): Observable<any[]> {
    return of(this.testTypes);
  }

  addTestType(type: any): Observable<any> {
    this.testTypes.push(type);
    return of(type);
  }

  updateTestType(updatedType: any): Observable<any> {
    this.testTypes = this.testTypes.map(t =>
      t.id === updatedType.id ? updatedType : t
    );
    return of(updatedType);
  }

  deleteTestType(id: string): Observable<boolean> {
    this.testTypes = this.testTypes.filter(t => t.id !== id);
    return of(true);
  }
}
