import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BasicHighlightDirectiveDirective } from './directives/basic-highlight-directive.directive';


console.log(environment);


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BasicHighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(environment.routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
