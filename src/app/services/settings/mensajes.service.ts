import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Notas} from 'app/models/notas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class MensajesService {
  Notas: Observable<Notas[]>;

    mensaje: Notas;
  constructor(public db: AngularFirestore) {
    this.Notas = db.collection('mensajes').valueChanges();

  }

  getNotas(){
   return this.Notas;

  }
}
