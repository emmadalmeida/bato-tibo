import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bateau } from '../models/bateau';


@Injectable({
  providedIn: 'root',
})
export class BateauService {
  listeBateaux: Bateau[] = [];
  constructor(private http: HttpClient) { }

  getBateau() {
    return this.http.get<{bateau : Bateau[]}>('../assets/data/bateau.json')
  }  
}
