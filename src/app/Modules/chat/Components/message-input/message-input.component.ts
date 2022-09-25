import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import {ChatMessagesService} from '../../Services/chat-messages.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  @Input() currentUserEmail: string | null | undefined = "";
  messageText: string = "";

  constructor(public chat_messages: ChatMessagesService) { }

  ngOnInit(): void {
  }

  addMessage() {
    this.chat_messages.addDocument(
      {
        message: this.messageText,
        from: this.currentUserEmail,
        to: "",
        timestamp: Date.now().toString()
      }
    ).then(
      ()=>this.messageText = ""
    );
  }

}