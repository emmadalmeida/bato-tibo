import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonHeader, IonToolbar, IonImg } from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-tibo-header',
  templateUrl: './tibo-header.component.html',
  styleUrls: ['./tibo-header.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonHeader, IonToolbar, IonImg, RouterLink],
})
export class TiboHeaderComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() { }

  onLoadCart() {
    this.router.navigate(['tabs/panier']);
  }

  onLoadAccueil() {
    this.router.navigate(['tabs/tab1']);
  }

  openSpin() {
    this.router.navigate(['/logo-spin'])
  }
}
