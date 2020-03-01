import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { TestComponent } from "./components/test.component";
import { SelectorClassComponent } from "./components/selectorclass.component";
import { SelectorAttributeComponent } from "./components/selectorattribute.component";
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SelectorClassComponent,
    SelectorAttributeComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
