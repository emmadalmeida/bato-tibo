import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton, IonIcon
} from '@ionic/angular/standalone';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon, CustomButtonComponent]
})
export class Tab2Page {

  constructor() { }

}
