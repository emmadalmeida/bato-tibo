import { Component, input, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonImg} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonImg]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
