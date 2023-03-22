import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //새롭게 추가된..?

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, WorldComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
