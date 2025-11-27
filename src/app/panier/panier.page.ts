import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAlert,
  IonButton,
  IonContent, IonDatetime, IonDatetimeButton,
  IonHeader, IonImg, IonItem,
  IonLabel,
  IonList, IonModal,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import type {OverlayEventDetail} from '@ionic/core';
import {PanierItem} from "../models/panier-item";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonText, IonList, IonItem, IonAlert, IonImg, IonDatetimeButton, IonModal, IonDatetime]
})
export class PanierPage implements OnInit {

  panierList: PanierItem[] = [];
  somme: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.loadPaniers()
  }

  loadPaniers() {
    this.panierList = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      const value = localStorage.getItem(key);
      if (!value) continue;


      const item = JSON.parse(value);
      this.panierList.push(item);
      this.somme += item.produit.price*item.qte

    }
  }

  deleteItem() {

  }

  public alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Supprimer',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }
}
