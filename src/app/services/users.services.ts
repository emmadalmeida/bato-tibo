import { Produit } from '../models/produit';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<{users : User[]}>('../assets/data/users.json')
  }
}
