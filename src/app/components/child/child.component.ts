import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Output() dataEvent = new EventEmitter<string>();

  sendData = () => {
    const data = 'Value to pass';
    console.log(data);
    this.dataEvent.emit(data);
  }
}
