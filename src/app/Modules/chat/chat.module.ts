import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { MessageBoardComponent } from './Components/message-board/message-board.component';
import { ChatRoomComponent } from './Pages/chat-room/chat-room.component';
import { MessageComponent } from './Components/message/message.component';
import { MessageInputComponent } from './Components/message-input/message-input.component';
import { FormsModule } from '@angular/forms';
import { ReadableDateFromTimestampPipe } from './Pipes/readable-date-from-timestamp.pipe';


@NgModule({
  declarations: [
    MessageBoardComponent,
    ChatRoomComponent,
    MessageComponent,
    MessageInputComponent,
    ReadableDateFromTimestampPipe
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
