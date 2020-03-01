import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>This is an inline template for component</h1>
    <p>Because of back ticks we can have multiple lines of HTML</p>
    <p>Like an HTML document</p>
    <p>And it's quite handy</p>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Inline Template";
}
