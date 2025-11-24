import { Produit } from '../models/produit';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {
  listeProduits: Produit[] = [];
  constructor(private http: HttpClient) { }

  getProduits() {
    return this.http.get<{produits : Produit[]}>('../assets/data/produits.json')
  }
}
