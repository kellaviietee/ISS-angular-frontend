import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from './services/product.service';
import { IssComponentComponent } from './components/iss-component/iss-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IssComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
