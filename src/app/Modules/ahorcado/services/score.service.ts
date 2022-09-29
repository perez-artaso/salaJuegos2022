import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { AhorcadoScore } from '../models/ahorcado-score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private collectionPath = '/ahorcado_scores';
  private ahorcadoScoresCollection: AngularFirestoreCollection<AhorcadoScore>;

  constructor(private firestore: AngularFirestore) { 
    this.ahorcadoScoresCollection = firestore.collection(this.collectionPath);
  }

  public getDocuments(): Observable<AhorcadoScore[]> {
    return this.ahorcadoScoresCollection.valueChanges({idField: 'id'});
  }

  public addDocument(ahorcadoScore: AhorcadoScore): Promise<DocumentReference<AhorcadoScore>> {
    return this.ahorcadoScoresCollection.add(ahorcadoScore);
  }

  public updateDocument(documentId: string, newValues: Object) {
    return this.ahorcadoScoresCollection.doc(documentId).update(newValues);
  }

  public deleteDocument(documentId: string) {
    return this.ahorcadoScoresCollection.doc(documentId).delete();
  }

}
