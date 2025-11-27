import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton, IonIcon, IonText],
})
export class Tab1Page {
  constructor(private router : Router) {}

  onLoadCart(){
    this.router.navigate(['/panier']);
  }
}
