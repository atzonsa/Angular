import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h2>
      Property Binding
    </h2>
    <input [id]="id" type="text" value="Ankit" /><br />
    <input id="{{ id }}" type="text" value="{{ fname }}" /><br />
    <input [id]="id" [disabled]="isDisabled" type="text" value="Ankit" /><br />
    <input bind-id="id" [disabled]="isDisabled2" type="text" value="Ankit" />
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  id = 500;
  fname = "Ramna";
  isDisabled = false;
  isDisabled2 = true;
}
