import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonText,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonImg, IonText]
})
export class AccueilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
