import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from './models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new BehaviorSubject(new Message());

  setMessage(message: Message): void {
    this.emit(message);
  }

  emit(message: Message): void {
    this.subject.next(message);
  };

  constructor() { }
}
