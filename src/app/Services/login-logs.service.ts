import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { LoginLog } from '../Models/login-log';

@Injectable({
  providedIn: 'root'
})
export class LoginLogsService {

  private collectionPath = '/login_logs';
  private loginLogsCollection: AngularFirestoreCollection<LoginLog>;

  constructor(private firestore: AngularFirestore) { 
    this.loginLogsCollection = firestore.collection(this.collectionPath);
  }

  public addDocument(loginLog: LoginLog): Promise<DocumentReference<LoginLog>> {
    return this.loginLogsCollection.add(loginLog);
  }



}
