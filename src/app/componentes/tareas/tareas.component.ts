import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service'
import {EditarPage} from '../../modal/editar/editar.page'
import { ModalController } from '@ionic/angular';
import {Tarea} from '../../modelo/tarea'
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {

  lista=[]
  fondo={
    Baja:'primary',
    media:'warning',
    alta:'danger'
  }
  constructor(public tareas:ApiService,public modalController: ModalController) { }
  ngOnInit() {
    this.tareas.getTareas().subscribe(tarea=>{
      
      this.lista=tarea
      
      
    })
    console.log(this.lista)
  }
  
  deleteTarea(event,tarea){
    this.tareas.delTarea(tarea)
  }
  editTarea(event,tarea){
    console.log(tarea)
  }

  async presentModal(tarea) {
    const modal = await this.modalController.create({
      component: EditarPage,
      componentProps: {
        'tarea' : tarea
      }
      
    });
    return await modal.present();
  }

  filtrar($event){
    console.log($event.target.value)
    if($event.target.value=='sin'){
      this.tareas.renew().subscribe(tarea=>{
      
        this.lista=tarea
        
        
      })
      console.log(this.lista)
    }else{
      this.tareas.filtrar($event.target.value).subscribe(tarea=>{
      
        this.lista=tarea
        
        
      })
      console.log(this.lista)
    }
    
  }
  ordenar($event){
    this.tareas.ordenar($event.target.value).subscribe(tarea=>{
      
      this.lista=tarea
      
      
    })
    console.log(this.lista)
  }

}
