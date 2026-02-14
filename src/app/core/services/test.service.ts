import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TESTS } from '../mock-data/mock-tests';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private tests = [...MOCK_TESTS];

  getTests(): Observable<any[]> {
    return of(this.tests);
  }

  addTest(test: any): Observable<any> {
    this.tests.push(test);
    return of(test);
  }

  updateTest(updatedTest: any): Observable<any> {
    this.tests = this.tests.map(t =>
      t.id === updatedTest.id ? updatedTest : t
    );
    return of(updatedTest);
  }

  deleteTest(id: string): Observable<boolean> {
    this.tests = this.tests.filter(t => t.id !== id);
    return of(true);
  }
}
