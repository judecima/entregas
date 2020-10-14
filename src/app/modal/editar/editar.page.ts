import { Component, Input, OnInit } from '@angular/core';
import {Tarea} from '../../modelo/tarea'
import {ApiService} from '../../service/api.service'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  editingTarea:Tarea
  constructor(public tareas:ApiService,public modalController: ModalController,) { }
  tarea;

  ngOnInit() {
    this.editingTarea=this.tarea
  }

  async closeModal() {
    await this.modalController.dismiss()
    
  } 

  updateTarea(){
    this.tareas.updTarea(this.editingTarea)
    this.closeModal()
  }

}
