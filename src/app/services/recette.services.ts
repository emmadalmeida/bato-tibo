import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recette } from '../models/recette';


@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  listeRecette: Recette[] = [];
  constructor(private http: HttpClient) { }

  getRecette() {
    return this.http.get<{ recette: Recette[] }>('../assets/data/recettes.json')
  }
}
