import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ProductoListaComponent, ProductoFormComponent],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }