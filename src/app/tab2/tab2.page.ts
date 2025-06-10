import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonSearchbar, IonList, IonItem, IonThumbnail, IonLabel,IonSpinner, IonBadge } 
from '@ionic/angular/standalone';
import { GamesService, Game } from '../services/games.service';
import { CommonModule } from '@angular/common';
import { ReleaseDatePipe } from '../pipes/release-date.pipe';
import { HighlightRatingDirective } from '../directives/highlight-rating.directive';
@Component({
selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss'],
imports: [
IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
IonList, IonItem, IonThumbnail, IonLabel, IonSpinner,
IonBadge,
CommonModule, ReleaseDatePipe, HighlightRatingDirective
]
})
export class Tab2Page implements OnInit {
games: Game[] = [];
loading = false;
searchTerm = '';
constructor(private gamesService: GamesService) {}
ngOnInit() {
this.loadGames();
}
loadGames() {
this.loading = true;
this.gamesService.getGames(1, this.searchTerm).subscribe({
next: (response) => {
this.games = response.results;
this.loading = false;
},
error: (error) => {
console.error('Erro ao carregar jogos:', error);
this.loading = false;
}
});
}
onSearchChange(event: any) {
this.searchTerm = event.detail.value;
if (this.searchTerm.length > 2 || this.searchTerm.length
=== 0) {
this.loadGames();
}
}
}


