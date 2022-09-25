import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './Pages/chat-room/chat-room.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'chat-room', pathMatch: 'full'
      },
      {
        path: 'chat-room', component: ChatRoomComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
