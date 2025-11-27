import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonItem } from '@ionic/angular/standalone';
import { BateauService } from '../services/bateau';
import { Bateau } from '../models/bateau';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-page-bateau-particulier',
  templateUrl: './page-bateau-particulier.page.html',
  styleUrls: ['./page-bateau-particulier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonItem, TabsPage]
})
export class PageBateauParticulierPage implements OnInit {

  listeBateau: Bateau[] = [];
  selectedBateau?: Bateau;

  constructor(private bateauService: BateauService) {
  }

  ngOnInit() {
    const nomFromState = history.state.nomBateau;

    this.bateauService.getBateau().subscribe({
      next: (data) => {
        this.listeBateau = data.bateau;

        if (nomFromState) {
          this.selectedBateau = this.listeBateau.find((b) => b.nom === nomFromState);
        }

        // Fallback: si rien trouvé, prend le premier bateau (ou reste undefined)
        if (!this.selectedBateau && this.listeBateau.length > 0) {
          this.selectedBateau = this.listeBateau[0];
        }

        console.log('selectedBateau', this.selectedBateau);
      },
      error: (err) => console.error(err)
    });
  }
}
