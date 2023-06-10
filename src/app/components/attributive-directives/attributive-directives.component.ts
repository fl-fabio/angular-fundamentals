import { Component } from '@angular/core';

@Component({
  selector: 'app-attributive-directives',
  templateUrl: './attributive-directives.component.html',
  styleUrls: ['./attributive-directives.component.scss']
})
export class AttributiveDirectivesComponent {
  isVisible: boolean = false;
 
  toggleVisibility = () => {
    this.isVisible = !this.isVisible;
  }
}
