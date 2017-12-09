import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Game } from './Game';
import { environment } from 'environments/environment';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.css']
})

export class Games{
  private games: Game[] = [];
  environmentName = environment.environment;
  constructor(private http: Http ) {    
    console.log("GETTING ALL GAMES");
    let URI = environment.api_url || `/api/games/`;
    console.log(URI);
    http.get(URI)
      .map(res => res.json()) 
      .subscribe(games => this.games = games); 
    }
  }
