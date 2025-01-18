import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NavBarComponent } from "./components/core/nav-bar/nav-bar.component";

//A class decorated with 'compenent' then it becomes a component for angular
// it has these
@Component({
  selector: 'app-root', //this name is used as a component selection
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavBarComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-course-ui';
}
