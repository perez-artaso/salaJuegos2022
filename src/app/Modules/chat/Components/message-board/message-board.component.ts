import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ChatMessage } from '../../Models/chat-message';
import { ChatMessagesService } from '../../Services/chat-messages.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  @ViewChild('chatEnd', { static: false }) chatEnd: ElementRef<HTMLInputElement> = {} as ElementRef;
  messages: Array<ChatMessage> = [];

  constructor(public messagesService: ChatMessagesService, public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.messagesService.getDocuments().subscribe(
      (m) => {
        this.messages = m.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));
        setTimeout( () => this.chatEnd.nativeElement.scrollIntoView(), 100);
      }
    )
  }

}
