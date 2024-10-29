import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrowserModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signpe';
  
}
