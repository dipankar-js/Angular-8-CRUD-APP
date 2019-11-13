import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Client } from '../models/Clients';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<any[]>;
  clients: Observable<any[]>;
  client: Observable<any>;

  constructor(public firestore: AngularFirestore) {}

  getClients() {
    this.clients = this.firestore
      .collection<Client>('clients')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
    return this.clients;
  }
  addClient(client) {
    const collection = this.firestore.collection<Client>('clients');
    collection.add({
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      phone: client.phone,
      balance: client.balance
    });
  }
  getClient(id: string) {
    this.client = this.firestore
      .collection('clients')
      .doc(id)
      .valueChanges();

    return this.client;
  }
  updateClient(id: string, client: Client) {
    this.firestore
      .collection<Client>('clients')
      .doc(id)
      .update({
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: client.phone,
        balance: client.balance
      });
  }
  deleteClient(id: string) {
    this.firestore
      .collection('clients')
      .doc(id)
      .delete();
  }
}
