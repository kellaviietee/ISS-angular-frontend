import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/common/person';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:Person[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCurrentPeople();
  }
  getCurrentPeople() {
    this.productService.getCurrentPeople().subscribe(
      data => {
        this.people = data;
      }
    )
  }
}
