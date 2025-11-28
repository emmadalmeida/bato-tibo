import { Component, input, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonImg} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { UsersService } from '../services/users.services';

import { Router } from '@angular/router';
import {User} from "../models/user";
import {ToastController} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonImg, RouterModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private router : Router, private usersservice : UsersService, private toastCtrl: ToastController) { }

  identifiant: string = '';
  motDePasse: string = '';

  ngOnInit() {
  }

  findUser(){
    let find : boolean = false;
    this.usersservice.getUsers().subscribe(
      {
        next: data => {
          data.users?.forEach((user : User) => {
            if(user.id === this.identifiant && user.mdp === this.motDePasse){
              this.router.navigate(['tabs/tab1']);
              this.presentToast('Connexion réussie.')
              find = true;
              return;
            }
          })
          if(!find){
            this.presentToast('Mauvais identifiants.')
          }
        },
        error: error => console.log(error),
      }
    )

  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'bottom'
    });

    await toast.present();
  }


}
