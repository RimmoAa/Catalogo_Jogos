import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';




export interface Game {
id: number;
name: string;
background_image: string;
rating: number;
released: string;
genres: Genre[];
platforms: Platform[];
description_raw?: string;
}
export interface Genre {
id: number;
name: string;
}
export interface Platform {
platform: {
id: number;
name: string;
};
}
export interface GameResponse {
count: number;
results: Game[];
}

@Injectable({
  providedIn:'root'
})

export class GamesService {
private apiUrl = 'https://api.rawg.io/api';
private apiKey = '147eddd3912443679f2f0f3a99f48b10';
constructor(private http: HttpClient) { }
getGames(page: number = 1, search?: string):
Observable<GameResponse> {
let params = new HttpParams()
.set('key', this.apiKey)
.set('page', page.toString())
.set('page_size', '10');
if (search) {
params = params.set('search', search);
}
return this.http.get<GameResponse>(`${this.apiUrl}/games`,
{ params });
}
getGameById(id: number): Observable<Game> {
const params = new HttpParams().set('key', this.apiKey);
return this.http.get<Game>(`${this.apiUrl}/games/${id}`, {
params });
}
}





