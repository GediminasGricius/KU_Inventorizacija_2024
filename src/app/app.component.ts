import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewItemComponent } from "./components/items/new-item/new-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventorizacija';
}
