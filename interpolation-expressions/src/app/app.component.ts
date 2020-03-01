import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Interpolation or Expression</h1>
    <h2>Hi {{ name }}</h2>
    <p>{{ 2001155 + 223200 }}</p>
    <p>{{ fname + " " + lname }}</p>
    <p>{{ name.length }}</p>
    <p>{{ name.toUpperCase() }}</p>
    <p>{{ myMethod() }}</p>
    <p>{{ siteUrl }}</p>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public name = "Ankit";

  public fname = "Raman";
  public lname = "Dixit";
  public siteUrl = window.location.href;
  myMethod() {
    return this.name + " is a good friend of " + this.fname + " " + this.lname;
  }
}
