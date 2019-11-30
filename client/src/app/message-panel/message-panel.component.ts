import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Message } from '../models/Message';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css']
})
export class MessagePanelComponent implements OnInit, OnChanges {

  @Input() message: Message;
  showPanel: boolean = false;

  panelClass(): string {
    return this.message.status === 'success' ? 'alert alert-dismissible alert-success alert-success-gradient ct-fade ct-shadow' : 'alert alert-dismissible alert-danger alert-danger-gradient ct-fade ct-shadow';
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.message.messages)
    if (this.message.messages.length > 0) {
      this.showPanel = true;
      console.log(this.message.messages);
    }
  }

}
