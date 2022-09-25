import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference  } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { ChatMessage } from '../Models/chat-message';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {

  private collectionPath = '/chat_messages';
  private chatMessagesCollection: AngularFirestoreCollection<ChatMessage>;

  constructor(private firestore: AngularFirestore) { 
    this.chatMessagesCollection = firestore.collection(this.collectionPath);
  }

  public getDocuments(): Observable<ChatMessage[]> {
    return this.chatMessagesCollection.valueChanges({idField: 'id'});
  }

  public addDocument(chatMessage: ChatMessage): Promise<DocumentReference<ChatMessage>> {
    return this.chatMessagesCollection.add(chatMessage);
  }

  public updateDocument(documentId: string, newValues: Object) {
    return this.chatMessagesCollection.doc(documentId).update(newValues);
  }

  public deleteDocument(documentId: string) {
    return this.chatMessagesCollection.doc(documentId).delete();
  }

}
