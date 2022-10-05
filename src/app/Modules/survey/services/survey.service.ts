import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private collectionPath = '/surveys';
  private surveysCollection: AngularFirestoreCollection<Survey>;

  constructor(private firestore: AngularFirestore) { 
    this.surveysCollection = firestore.collection(this.collectionPath);
  }

  public getDocuments(): Observable<Survey[]> {
    return this.surveysCollection.valueChanges({idField: 'id'});
  }

  public addDocument(survey: Survey): Promise<DocumentReference<Survey>> {
    return this.surveysCollection.add(survey);
  }

  public updateDocument(documentId: string, newValues: Object) {
    return this.surveysCollection.doc(documentId).update(newValues);
  }

  public deleteDocument(documentId: string) {
    return this.surveysCollection.doc(documentId).delete();
  }



}
