import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './models/Message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit{
  title = 'client';
  showSuccess = true;
  showError = true;
  message: Message;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.subject.subscribe(
      messages => this.message = messages
    );
  }
}
