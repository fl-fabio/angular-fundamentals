import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';


@Component({
  selector: 'app-prove-service',
  templateUrl: './prove-service.component.html',
  styleUrls: ['./prove-service.component.scss']
})
export class ProveServiceComponent implements OnInit {
  constructor(

    private endpointsService: EndpointsService,

  ) {}

  itemList: string[] = [];

  ngOnInit(): void {

    this.endpointsService.getUsers().subscribe(
      (data) => {
        console.log('Data:',data);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  } 
}
