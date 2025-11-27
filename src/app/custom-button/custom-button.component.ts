import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonImg,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  imports: [CommonModule, FormsModule, IonButton, IonItem, IonImg]
})
export class CustomButtonComponent implements OnInit {
  @Input() titre: string = '';
  @Input() urlimg: string = '';

  constructor() {}

  ngOnInit() {}

}
