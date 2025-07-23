import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomUser } from './Components/random-user/random-user';
import { Header } from './Components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RandomUser, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}