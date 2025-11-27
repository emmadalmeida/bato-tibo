import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAlert,
  IonButton, IonButtons,
  IonContent, IonDatetime, IonDatetimeButton,
  IonHeader, IonImg, IonItem,
  IonLabel,
  IonList, IonModal, IonPicker, IonPickerColumn, IonPickerColumnOption,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import type {OverlayEventDetail} from '@ionic/core';
import {PanierItem} from "../models/panier-item";
import { AlertController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonText, IonList, IonItem, IonAlert, IonImg, IonDatetimeButton, IonModal, IonDatetime, IonButtons, IonPicker, IonPickerColumn, IonPickerColumnOption]
})
export class PanierPage implements OnInit {

  panierList: PanierItem[] = [];
  somme: number = 0;
  lieuChoisi : string = '';
  lieuxLivraison : string[] = ['Bistrot des Gascons', 'Café des Phares', 'Le Vert Tulipe', 'Ruche qui dit Oui'];

  constructor(private alertController: AlertController, private pickerCtrl: PickerController) {
  }

  ngOnInit() {
    this.loadPaniers()
    console.log(localStorage)
  }

  onIonChange(event: CustomEvent) {
    this.lieuChoisi = event.detail.value;
  }

  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
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
    }
    this.calculSomme()
  }

  calculSomme(){
    this.somme = 0;
    this.panierList.forEach(element => {
      this.somme += element.produit.price*element.qte
    })
  }

  deleteItem(index: number) {
    let supp = this.panierList.splice(index, 1);
    localStorage.removeItem(supp[0].produit.name)
    this.calculSomme()
  }

  async openModifPicker(item : PanierItem){
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'quantity',
          options: Array.from({ length: 10 }, (_, i) => ({
            text: `${i + 1}`,
            value: i + 1
          }))
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: (selected) => {
            console.log('Quantité choisie:', selected.quantity.value);
            item.qte = selected.quantity.value;
            this.calculSomme()

          }
        }
      ]
    });

    await picker.present();
  }


  async openDeleteAlert(index: number, item: PanierItem) {
    const alert = await this.alertController.create({
      header: 'Confirmer',
      message: `Êtes vous sûre de vouloir supprimer ${item.produit.name} de votre panier ?`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Supprimer',
          role: 'confirm',
          handler: () => {
            this.deleteItem(index);
          }
        }
      ]
    });

    await alert.present();
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
