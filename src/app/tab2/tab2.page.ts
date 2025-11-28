import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CustomButtonComponent, IonList]
})
export class Tab2Page implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
      console.log('Tab2Page loaded');
  }

  goToPageRestaurantParti(nomRestaurant: string) {
    console.log('Navigating to restaurant page for:', nomRestaurant);
    // Navigue vers la page du restaurant particulier en passant `nomRestaurant` comme paramètre de route
    this.router.navigate(['/page-restaurant-particulier'], { state: { nomRestaurant } });
  }
}
