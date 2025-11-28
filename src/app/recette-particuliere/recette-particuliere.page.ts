import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonItem } from '@ionic/angular/standalone';
import { BateauService } from '../services/bateau';
import { Recette } from '../models/recette';
import { TabsPage } from '../tabs/tabs.page';
import { RecetteService } from '../services/recette.services';

@Component({
  selector: 'app-page-recette-particuliere',
  templateUrl: './recette-particuliere.page.html',
  styleUrls: ['./recette-particuliere.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonItem, TabsPage]
})
export class RecetteParticulierePage implements OnInit {

  listeRecette: Recette[] = [];
  selectedRecette?: Recette;

  constructor(private recetteService: RecetteService) {
  }

  ngOnInit() {
    const nomFromState = history.state.nomRecette;

    this.recetteService.getRecette().subscribe({
      next: (data) => {

        this.listeRecette = data.recette;

        console.log(this.listeRecette)
        if (nomFromState) {
          this.selectedRecette = this.listeRecette.find((r) => r.nom === nomFromState);
        }

        // Fallback: si rien trouvé, prend le premier bateau (ou reste undefined)
        if (!this.selectedRecette && this.listeRecette.length > 0) {
          this.selectedRecette = this.listeRecette[0];
        }
      },
      error: (err) => console.error(err)
    });
  }
}
