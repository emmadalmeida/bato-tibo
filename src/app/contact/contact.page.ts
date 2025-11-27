import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { TiboHeaderComponent } from '../tibo-header/tibo-header.component';
import { addIcons } from 'ionicons';
import { callOutline, mailOutline, logoFacebook, mail } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonIcon, TiboHeaderComponent, IonImg, RouterModule]
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
