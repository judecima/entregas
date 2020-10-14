import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Tarea} from '../modelo/tarea'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  tareasColeccion:AngularFirestoreCollection;
  tareasDoc: AngularFirestoreDocument;
  tareas:Observable<Tarea[]>;

  

  constructor(public db: AngularFirestore) {
    // this.tareas=this.db.collection('tareas').valueChanges();
    this.tareasColeccion=this.db.collection<Tarea>('tareas', ref => ref.orderBy('creacion','desc'));
    
    this.tareas=this.tareasColeccion.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Tarea;
        data.id = a.payload.doc.id;
        return data
      })
    }))

     
   }

   filtrar(valor){
    this.tareasColeccion=this.db.collection<Tarea>('tareas', ref => ref.where('estado','==',valor));
    
    this.tareas=this.tareasColeccion.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Tarea;
        data.id = a.payload.doc.id;
        return data
      })
    }))

    return this.tareas

   }

   ordenar(orden){

    this.tareasColeccion=this.db.collection<Tarea>('tareas', ref => ref.orderBy('creacion',orden));
    
    this.tareas=this.tareasColeccion.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Tarea;
        data.id = a.payload.doc.id;
        return data
      })
    }))
    return this.tareas

   }


   getTareas(){
     return this.tareas
   }

   addTarea(tarea:Tarea){
     this.tareasColeccion.add(tarea)
   }

   delTarea(tarea:Tarea){
   
    this.tareasDoc=this.db.doc(`tareas/${tarea.id}`)
    this.tareasDoc.delete()
   }

   updTarea(tarea:Tarea){
   
   this.tareasDoc=this.db.doc(`tareas/${tarea.id}`)
   this.tareasDoc.update(tarea)
  }

  renew(){
    this.tareasColeccion=this.db.collection<Tarea>('tareas', ref => ref.orderBy('creacion','desc'));
    
    this.tareas=this.tareasColeccion.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Tarea;
        data.id = a.payload.doc.id;
        return data
      })
    }))
    return this.tareas
  }
  
}
