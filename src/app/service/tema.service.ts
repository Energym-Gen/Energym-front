import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://projetoenergym.herokuapp.com/tema/', this.token)
  }

  getTemaById(id: number):Observable<Tema>{
    return this.http.get<Tema>(`https://projetoenergym.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://projetoenergym.herokuapp.com/tema/', tema, this.token)
  }


}
