import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../../Models/chat-message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() isFromCurrentUser: boolean = false;
  @Input() message: ChatMessage | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
