import { Injectable } from '@angular/core';




@Injectable({

  providedIn: 'root',
})

export class SessionService {

  private sessionKey = 'segrep-session';

  saveSession(sessionData: { userId: string; type: string }): void {

    localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
  }

  getSession(): { userId: string; type: string } | null {

    const session = localStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session) : null;
  }

  clearSession(): void {

    localStorage.removeItem(this.sessionKey);
  }
}
