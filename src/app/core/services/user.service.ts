import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_USERS } from '../mock-data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [...MOCK_USERS];

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  addUser(user: any): Observable<any> {
    this.users.push(user);
    return of(user);
  }

  updateUser(updatedUser: any): Observable<any> {
    this.users = this.users.map(u =>
      u.id === updatedUser.id ? updatedUser : u
    );
    return of(updatedUser);
  }

  deleteUser(id: string): Observable<boolean> {
    this.users = this.users.filter(u => u.id !== id);
    return of(true);
  }
}
