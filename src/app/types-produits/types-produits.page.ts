import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {PanierItem} from "../models/panier-item";


@Component({
  selector: 'app-types-produits',
  templateUrl: './types-produits.page.html',
  styleUrls: ['./types-produits.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonItem, IonList, IonButtons]
})
export class TypesProduitsPage implements OnInit {

  panierList : PanierItem[] = []
  constructor(private router : Router) {

  }

  ngOnInit() {
  }

  onLoadCategorie(type : number){
    let extras = {
      state : {
        type: type
      }
    }
    this.router.navigate(['/liste-produits'], extras)
  }

}
