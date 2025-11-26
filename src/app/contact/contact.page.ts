import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { TiboHeaderComponent } from '../tibo-header/tibo-header.component';
import { addIcons } from 'ionicons';
import { callOutline, mailOutline, logoFacebook, mail } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, TiboHeaderComponent, IonImg]
})
export class ContactPage implements OnInit {

  constructor() {
    addIcons({ callOutline });
    addIcons({ mailOutline });
    addIcons({ logoFacebook });
  }

  ngOnInit() {
  }

}
