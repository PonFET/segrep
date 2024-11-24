import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SessionService } from './session.service';




@Injectable({

  providedIn: 'root',
})

export class AuthService {

  private apiUrl = 'http://localhost:3000/users';


  //No tengo roles en las interfaces, así que determino el tipo de usuario de esta manera
  private determineUserType(user: any): string { 
    if ('cuil' in user) {
      return 'company';
    } else if ('repairSpecialty' in user) {
      return 'repairer';
    } else if ('preferredContact' in user) {
      return 'client';
    } else {
      return 'unknown';
    }
  }
  

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  login(email: string, password: string): Observable<boolean> {

    return this.http
      //Cómo me marea todo esto
      //Llamada al endpoint--------------------------------------------------------------------------
      .get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      //Pipe para encadenar--------------------------------------------------------------------------
      //map para seleccionar primer resultado, sino null
      //tap para que se guarde la sesión
      //---------------------------------------------------------------------------------------------
      .pipe(
        map((users) => users.length > 0 ? users[0] : null),
        tap((user) => {

          if (user) {

            this.sessionService.saveSession({ userId: user.id, type: user.role });
          }
        }),
        //--------------------------------------------------------------------------
        //map para convertir a boolean dependiendo de si existe el user o no--------
        map((user) => !!user)
      );
  }

  logout(): void {

    this.sessionService.clearSession();
  }

  isAuthenticated(): Observable<boolean> {

    const session = this.sessionService.getSession();
    return of(!!session);
  }

  getCurrentUserType(): Observable<string | null> {

    const session = this.sessionService.getSession();
    return of(session ? session.type : null);
  }
}
