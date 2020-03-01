import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      div {
        color: white;
        background-color: red;
        text-align: center;
        padding: 50px;
        font-size: 50px;
      }
    `
  ]
})
export class AppComponent {
  title = "Inline Styles";
}
