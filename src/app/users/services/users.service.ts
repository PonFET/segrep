import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, Repairer, Company } from '../interfaces/user';

//Debería usar el tipo Partial<type> o un objeto entero para modificar?
//Con Partial<type> puedo hacer el PATCH, mientras que con un objeto entero sería un PUT.



@Injectable({

  providedIn: 'root'
})

export class UsersService {

  private apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  //--------------------------------------------------------------------------------------------------------------------------
  //ABM Clientes
  getClients(): Observable<Client[]> {

    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }

  getClientById(id: number): Observable<Client[]> {

    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }

  createClient(client: Client): Observable<Client> {

    return this.http.post<Client>(`${this.apiUrl}/clients`, client);
  }

  /*updateClient(id: number, client: Partial<Client>): Observable<Client> {

    return this.http.patch<Client>(`${this.apiUrl}/clients/${id}`, client);
  }*/

  deleteClient(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/clients/${id}`);
  }
  

  //--------------------------------------------------------------------------------------------------------------------------
  // ABM para Repairers
  getRepairers(): Observable<Repairer[]> {

    return this.http.get<Repairer[]>(`${this.apiUrl}/repairers`);
  }

  getRepairerById(id: number): Observable<Repairer> {

    return this.http.get<Repairer>(`${this.apiUrl}/repairers/${id}`);
  }

  createRepairer(repairer: Repairer): Observable<Repairer> {

    return this.http.post<Repairer>(`${this.apiUrl}/repairers`, repairer);
  }

  /*updateRepairer(id: number, repairer: Partial<Repairer>): Observable<Repairer> {

    return this.http.patch<Repairer>(`${this.apiUrl}/repairers/${id}`, repairer);
  }*/

  deleteRepairer(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/repairers/${id}`);
  }


  //--------------------------------------------------------------------------------------------------------------------------
  // ABM para Companies
  getCompanies(): Observable<Company[]> {

    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompanyById(id: number): Observable<Company> {

    return this.http.get<Company>(`${this.apiUrl}/companies/${id}`);
  }

  createCompany(company: Company): Observable<Company> {

    return this.http.post<Company>(`${this.apiUrl}/companies`, company);
  }

  /*updateCompany(id: number, company: Partial<Company>): Observable<Company> {

    return this.http.patch<Company>(`${this.apiUrl}/companies/${id}`, company);
  }*/

  deleteCompany(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/companies/${id}`);
  }
}
