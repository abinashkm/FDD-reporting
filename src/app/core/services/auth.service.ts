import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_USERS } from '../mock-data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'currentUser';

  // DEMO LOGIN
  autoLoginDemoUser() {
    const existingUser = localStorage.getItem(this.storageKey);

    if (!existingUser) {
      const demoUser = {
        id: 'U-000',
        name: 'Demo Admin',
        email: 'demo@terraped.com',
        role: 'Admin',
        status: 'Active'
      };

      localStorage.setItem(this.storageKey, JSON.stringify(demoUser));
    }
  }

  login(email: string): Observable<boolean> {
    const user = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase()
    );

    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      return of(true);
    }

    return of(false);
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getCurrentUser() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : null;
  }
}
