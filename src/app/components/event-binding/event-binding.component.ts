import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  message: string = '';
  inputValue: string = '';

  handleClick = () => { 
    this.message = 'Button clicked!!!'
  }

  handleKeyUp = (e: KeyboardEvent) => {
    this.inputValue = (e.target as HTMLInputElement).value
  }
}
