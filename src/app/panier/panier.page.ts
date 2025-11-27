import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader, IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';
import {PanierItem} from "../models/panier-item";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonText, IonList, IonItem, IonAlert]
})
export class PanierPage implements OnInit {

  panierList: PanierItem[] = [];
  constructor() { }

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

      try {
        const item = JSON.parse(value);
        this.panierList.push(item);
      } catch (e) {
        console.warn("Invalid JSON in localStorage for key:", key);
      }
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
      text: 'OK',
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
