import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatComponent } from "./cat/cat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
