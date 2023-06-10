import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  isActive = false;

  toggleActive = () => {
    this.isActive = !this.isActive;
  }

  color = 'blue';
  fontSize = 14;

  changeStyle = () => {
    this.color = 'red';
    this.fontSize = 18;
  }

}
