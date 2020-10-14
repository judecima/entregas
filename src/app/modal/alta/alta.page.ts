import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Tarea} from '../../modelo/tarea'
import {ApiService} from '../../service/api.service'
@Component({
  selector: 'app-alta',
  templateUrl: './alta.page.html',
  styleUrls: ['./alta.page.scss'],
})
export class AltaPage implements OnInit {
  tarea={} as Tarea;
  constructor(public modalController: ModalController,public tareasService:ApiService) { 



  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss()
    
  } 

  addTarea(){
    console.log(this.tarea)
    this.tareasService.addTarea(this.tarea)
    this.closeModal()
  }

}
