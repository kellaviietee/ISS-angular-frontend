import { Component, OnInit } from '@angular/core';
import { Iss } from 'src/app/common/iss';
import { ProductService } from 'src/app/services/product.service';
import { IssPosition } from 'src/app/common/iss';

@Component({
  selector: 'app-iss-component',
  templateUrl: './iss-component.component.html',
  styleUrls: ['./iss-component.component.css']
})
export class IssComponentComponent implements OnInit {
  iss:Iss = new Iss(0,320492390,"testing",new IssPosition("800","85"));

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getIss();
  }
  getIss() {
    this.productService.getIss().subscribe(
      data => {
        this.iss = data;
      }
    )
  }

}
