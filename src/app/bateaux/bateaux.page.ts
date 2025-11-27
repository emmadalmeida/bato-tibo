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
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonList, IonImg, TiboHeaderComponent, CustomButtonComponent]
})
export class BateauxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPageBateauParti(nomBateau: string) {
    // Navigue vers la page du bateau particulier en passant `nomBateau` comme paramètre de route
    this.router.navigate(['/page-bateau-particulier'], { state: { nomBateau } });
  }
}
