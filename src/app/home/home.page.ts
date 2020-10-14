import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AltaPage } from '../modal/alta/alta.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AltaPage,
      
    });
    return await modal.present();
  }

}


