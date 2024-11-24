import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fix, FixStep } from '../interfaces/fix';




@Injectable({

  providedIn: 'root',
})

export class FixService {

  private apiUrl: string = 'http://localhost:3000/fixes';

  constructor(private http: HttpClient) { }



  //--------------------------------------------------------------------------------------------------------------------------
  //ABM Fixes - Los steps están guardadas en un array dentro de los Fixes
  getFixes(): Observable<Fix[]> {

    return this.http.get<Fix[]>(this.apiUrl);
  }

  getFixById(fixId: number): Observable<Fix> {

    return this.http.get<Fix>(`${this.apiUrl}/${fixId}`);
  }

  createFix(fix: Fix): Observable<Fix> {

    return this.http.post<Fix>(this.apiUrl, fix);
  }

  updateFix(fixId: number, fix: Partial<Fix>): Observable<Fix> {

    return this.http.patch<Fix>(`${this.apiUrl}/${fixId}`, fix);
  }

  deleteFix(fixId: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${fixId}`);
  }


  //--------------------------------------------------------------------------------------------------------------------------
  //ABM Steps - Están guardados como array dentro del Fix a que pertencen
  getSteps(fixId: number): Observable<FixStep[]> {

    return this.http.get<FixStep[]>(`${this.apiUrl}/${fixId}/steps`);
  }

  getStepById(fixId: number, stepId: number): Observable<FixStep> {

    return this.http.get<FixStep>(`${this.apiUrl}/${fixId}/steps/${stepId}`);
  }

  addStep(fixId: number, step: FixStep): Observable<Fix> {

    return this.http.post<Fix>(`${this.apiUrl}/${fixId}/steps`, step);
  }

  updateStep(fixId: number, stepId: number, step: Partial<FixStep>): Observable<Fix> {

    return this.http.patch<Fix>(`${this.apiUrl}/${fixId}/steps/${stepId}`, step);
  }

  deleteStep(fixId: number, stepId: number): Observable<Fix> {

    return this.http.delete<Fix>(`${this.apiUrl}/${fixId}/steps/${stepId}`);
  }
}

