import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonItem } from '@ionic/angular/standalone';
import { RestaurantService } from '../services/restaurant.services';
import { Restaurant } from '../models/restaurant';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-page-restaurant-particulier',
  templateUrl: './page-restaurant-particulier.page.html',
  styleUrls: ['./page-restaurant-particulier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonItem, TabsPage]
})
export class PageRestaurantParticulierPage implements OnInit {

  listeRestaurant: Restaurant[] = [];
  selectedRestaurant?: Restaurant;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    const nomFromState = history.state.nomrestaurant;

    this.restaurantService.getRestaurant().subscribe({
      next: (data) => {
        this.listeRestaurant = data.restaurant;

        if (nomFromState) {
          this.selectedRestaurant = this.listeRestaurant.find((r) => r.nom === nomFromState);
        }

        // Fallback: si rien trouvé, prend le premier restaurant (ou reste undefined)
        if (!this.selectedRestaurant && this.listeRestaurant.length > 0) {
          this.selectedRestaurant = this.listeRestaurant[0];
        }

        console.log('selectedRestaurant', this.selectedRestaurant);
      },
      error: (err) => console.error(err)
    });
  }
}
