import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  myString: string = '';

  onChangeString = () => {
    this.myString = 'Button clicked!!!';
  };

  receivedData!: string;


  onReceiveData = (data: string) => {
    console.log(data);
    this.receivedData = data;
  }
}
