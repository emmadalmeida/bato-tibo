import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, IonImg,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonItem, IonList, IonImg, CustomButtonComponent]
})
export class RecettesPage implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  goToPageRecetteParticuliere(nomRecette: string) {
    // Navigue vers la page de la recette particulière en passant `nomRecette` comme paramètre de route
    this.router.navigate(['/recette-particuliere'], { state: { nomRecette } });
  }

}
