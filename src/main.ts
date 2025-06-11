import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { addIcons } from 'ionicons';
import { star, gameController, search, trendingUp } from 'ionicons/icons';

addIcons({
  star,
  'game-controller': gameController,
  search,
  'trending-up': trendingUp
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
