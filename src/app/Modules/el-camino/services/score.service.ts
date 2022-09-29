import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { CaminoScore } from '../models/camino-score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private collectionPath = '/camino_scores';
  private caminoScoresCollection: AngularFirestoreCollection<CaminoScore>;

  constructor(private firestore: AngularFirestore) { 
    this.caminoScoresCollection = firestore.collection(this.collectionPath);
  }

  public getDocuments(): Observable<CaminoScore[]> {
    return this.caminoScoresCollection.valueChanges({idField: 'id'});
  }

  public addDocument(ahorcadoScore: CaminoScore): Promise<DocumentReference<CaminoScore>> {
    return this.caminoScoresCollection.add(ahorcadoScore);
  }

  public updateDocument(documentId: string, newValues: Object) {
    return this.caminoScoresCollection.doc(documentId).update(newValues);
  }

  public deleteDocument(documentId: string) {
    return this.caminoScoresCollection.doc(documentId).delete();
  }

}
