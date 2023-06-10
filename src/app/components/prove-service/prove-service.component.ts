import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { UserService } from 'src/app/services/user.service';
import { ItemListService } from 'src/app/services/item-list.service';

@Component({
  selector: 'app-prove-service',
  templateUrl: './prove-service.component.html',
  styleUrls: ['./prove-service.component.scss']
})
export class ProveServiceComponent implements OnInit {
  constructor(
    private userService: UserService,
    private endpointsService: EndpointsService,
    private itemListService: ItemListService
  ) {}

  itemList: string[] = [];

  ngOnInit(): void {
    this.userService.addUser('Gino');
    this.userService.addUser('Paoli');
    this.userService.addUser('Giacomo');
    console.log(this.userService.getUsers());


    this.userService.removeUser('Paoli');
    console.log(this.userService.getUsers());

    this.endpointsService.getUsers().subscribe(
      (data) => {
        console.log('Data:',data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );

    this.itemListService.addItem('Marco');

/*     this.itemListService.getItems().subscribe(
      (items) => {
        console.log('items:',items)
        this.itemList = items;
      }
    ) */

    setTimeout(() => {
      console.log('ciao')
      this.itemListService.getItems().subscribe((items) => {
        console.log('items:', items);
        this.itemList = items;
      });
    }, 1000);

    

  } 
}
