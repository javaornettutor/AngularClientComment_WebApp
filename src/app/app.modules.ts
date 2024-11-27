import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Axios} from 'axios';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Axios
    // other modules
  ],
  providers: [
  
  ], // Add the service here

  bootstrap: [],
})
export class AppModule {}
