import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-types-produits',
  templateUrl: './types-produits.page.html',
  styleUrls: ['./types-produits.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonItem, IonList]
})
export class TypesProduitsPage implements OnInit {

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
