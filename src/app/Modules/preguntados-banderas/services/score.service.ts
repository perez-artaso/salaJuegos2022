import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { BanderasScore } from '../models/banderas-score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private collectionPath = '/banderas_scores';
  private banderasScoresCollection: AngularFirestoreCollection<BanderasScore>;

  constructor(private firestore: AngularFirestore) { 
    this.banderasScoresCollection = firestore.collection(this.collectionPath);
  }

  public getDocuments(): Observable<BanderasScore[]> {
    return this.banderasScoresCollection.valueChanges({idField: 'id'});
  }

  public addDocument(banderasScore: BanderasScore): Promise<DocumentReference<BanderasScore>> {
    return this.banderasScoresCollection.add(banderasScore);
  }

  public updateDocument(documentId: string, newValues: Object) {
    return this.banderasScoresCollection.doc(documentId).update(newValues);
  }

  public deleteDocument(documentId: string) {
    return this.banderasScoresCollection.doc(documentId).delete();
  }

}
