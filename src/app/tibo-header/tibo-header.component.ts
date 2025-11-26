import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonHeader, IonToolbar, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tibo-header',
  templateUrl: './tibo-header.component.html',
  styleUrls: ['./tibo-header.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonHeader, IonToolbar, IonImg],
})
export class TiboHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
