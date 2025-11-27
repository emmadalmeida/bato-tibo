import { Component, effect, OnInit } from '@angular/core';
import { ProduitsService } from '../services/produits.services'
import { ToastController } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonList, IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Produit } from "../models/produit";
import { HttpClientModule } from '@angular/common/http';
import { PanierItem } from "../models/panier-item";
import { CustomButtonComponent } from '../custom-button/custom-button.component';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.page.html',
  styleUrls: ['./liste-produits.page.scss'],
  standalone: true,

  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, HttpClientModule, IonLabel, IonButton, IonBadge, IonModal, CustomButtonComponent]
})
export class ListeProduitsPage implements OnInit {
  currentValue = 1;
  type!: number;
  listeProduits: Produit[] = [];
  listePanier: PanierItem[] = [];

  constructor(router: Router, private produitsServices: ProduitsService, private toastCtrl: ToastController
  ) {
    const nav = effect(() => {
      const signal = router.currentNavigation();
      if (signal) {
        this.type = signal.extras.state?.['type'];
      }
    });
  }

  ngOnInit() {
    this.produitsServices.getProduits().subscribe({
      next: data => {
        console.log(data);
        data.produits?.forEach(produit => {

          if (produit.category === this.type) {
            this.listeProduits.push(produit)
          }
        })
      },
      error: error => console.log(error),
    })
  }

  loadListeProduits() {

  }

  addProduit(produit: Produit) {
    const item = this.listePanier.find(p => p.produit.id === produit.id);

    if (item) {
      item.qte += 1;
      localStorage.setItem(
        item.produit.name,
        JSON.stringify(item)
      );
    } else {
      let pi: PanierItem = {
        produit: produit,
        qte: 1
      }
      localStorage.setItem(
        pi.produit.name,
        JSON.stringify(pi)
      );
      this.listePanier.push(pi);
    }

    this.presentToast(produit);
    console.log(this.listePanier);
  }

  onIonChange(event: CustomEvent) {
    this.currentValue = event.detail.value;
  }


  async presentToast(produit: Produit) {
    const toast = await this.toastCtrl.create({
      message: `${produit.name} ajouté au panier.`,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

}
