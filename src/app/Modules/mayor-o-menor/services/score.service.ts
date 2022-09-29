import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { MOMScore } from '../models/mom-score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private collectionPath = '/mom_scores';
  private momScoresCollection: AngularFirestoreCollection<MOMScore>;

  constructor(private firestore: AngularFirestore) { 
    this.momScoresCollection = firestore.collection(this.collectionPath);
  }

  public getDocuments(): Observable<MOMScore[]> {
    return this.momScoresCollection.valueChanges({idField: 'id'});
  }

  public addDocument(momScore: MOMScore): Promise<DocumentReference<MOMScore>> {
    return this.momScoresCollection.add(momScore);
  }

  public updateDocument(documentId: string, newValues: Object) {
    return this.momScoresCollection.doc(documentId).update(newValues);
  }

  public deleteDocument(documentId: string) {
    return this.momScoresCollection.doc(documentId).delete();
  }

}
