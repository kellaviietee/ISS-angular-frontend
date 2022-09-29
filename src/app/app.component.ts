import { Component } from '@angular/core';
import { IssComponentComponent } from './components/iss-component/iss-component.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-iss';

  constructor(private productService: ProductService) { 
    
  }

}
