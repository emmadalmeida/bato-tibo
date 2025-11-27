import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonItem } from '@ionic/angular/standalone';
import { BateauService } from '../services/bateau';
import { Bateau } from '../models/bateau';

@Component({
  selector: 'app-page-bateau-particulier',
  templateUrl: './page-bateau-particulier.page.html',
  styleUrls: ['./page-bateau-particulier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonItem]
})
export class PageBateauParticulierPage implements OnInit {

  listeBateaux: Bateau[] = [];
  constructor(private bateauService : BateauService) { 
  }

  ngOnInit() {
    this.bateauService.getBateau().subscribe({
      next: (data) => {
        this.listeBateaux = data.bateau;
      }
        });
  }
}
