import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{educacion} from 'src/app/services/profesores.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    educacion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
