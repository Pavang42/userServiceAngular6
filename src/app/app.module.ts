import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, UserComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}