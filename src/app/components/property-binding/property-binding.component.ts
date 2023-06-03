import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  imageUrl: string = "https://picsum.photos/300/200";
  altText: string = "Image exaple";
  isButtonDisabled: boolean = true;
}
