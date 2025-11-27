import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { TiboHeaderComponent } from '../tibo-header/tibo-header.component';
import { CustomButtonComponent } from "../custom-button/custom-button.component";



@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonList, IonImg, TiboHeaderComponent, CustomButtonComponent]
})
export class BateauxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
