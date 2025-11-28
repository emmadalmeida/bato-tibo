import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { createAnimation } from '@ionic/core';



@Component({
  selector: 'app-logo-spin',
  templateUrl: './logo-spin.page.html',
  styleUrls: ['./logo-spin.page.scss'],
  standalone: true,
  imports: [IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LogoSpinPage implements OnInit {

  constructor(private router: Router) { }

  navigateAfterSpin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  ngOnInit() {

  }
  animation: any;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    const el = document.querySelector('#logo');
    console.log('Element found:', el);
    if (!el) return;
    this.animation = createAnimation()
      .addElement(el)
      .keyframes([{ transform: 'scale(1) rotate(0)' }, { transform: 'scale(1) rotate(360deg)' }])
      .onFinish(() => this.navigateAfterSpin());


    var animation = createAnimation().duration(2000).addAnimation([this.animation]);
    animation.play();

  }
}
