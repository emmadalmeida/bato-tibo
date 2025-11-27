import { Component } from '@angular/core';
import {IonApp, IonRouterOutlet, IonTabs, Platform} from '@ionic/angular/standalone';
import {TiboHeaderComponent} from "./tibo-header/tibo-header.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, TiboHeaderComponent, IonTabs],
})
export class AppComponent {
  constructor() {}
}
