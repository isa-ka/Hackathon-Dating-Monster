import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monster } from './monster';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private monsterApi = 'https://hackathon-wild-hackoween.herokuapp.com/monsters'

  constructor(private http: HttpClient) { }

  getMonsters(): Observable<{monsters: Monster[]}> {
    return this.http.get<{monsters: Monster[]}>(this.monsterApi)
  }
}
