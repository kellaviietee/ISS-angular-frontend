import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from './services/product.service';
import { IssComponentComponent } from './components/iss-component/iss-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: "iss", component:IssComponentComponent},
  {path: "", redirectTo: "/iss", pathMatch: "full"},
  {path: "**", redirectTo: "/iss", pathMatch: "full"}

];

@NgModule({
  declarations: [
    AppComponent,
    IssComponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
