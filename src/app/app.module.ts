import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculationsComponent } from './comps/calculations/calculations.component';
import { HistoryComponent } from './comps/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
